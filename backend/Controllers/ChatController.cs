using Microsoft.AspNetCore.Mvc;
using backend.Data;
using backend.DTOs;
using backend.Models;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;



namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChatController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly HttpClient _http;
        private readonly IConfiguration _config;

        public ChatController(AppDbContext context, IConfiguration config)
        {
            _context = context;
            _http = new HttpClient();
            _config = config;
        }


        [HttpPost]
        public async Task<IActionResult> EnviarMensagem([FromBody] ChatRequest request)
        {
            var bot = await _context.Bots.FindAsync(request.BotId);
            if (bot == null)
                return NotFound("Bot não encontrado.");

            var prompt = new[]
            {
                new { role = "system", content = bot.Contexto },
                new { role = "user", content = request.MensagemUsuario }
            };

            var body = new
            {
                model = "gpt-3.5-turbo",
                messages = prompt,
                temperature = 0.7
            };

            // variavel da chave da API
            var apiKey = _config["OpenAI:ApiKey"];

            if (string.IsNullOrEmpty(apiKey))
                return StatusCode(500, "API Key não foi encontrada.");
                
            _http.DefaultRequestHeaders.Authorization =
                new AuthenticationHeaderValue("Bearer", apiKey);

            var response = await _http.PostAsync(
                "https://api.openai.com/v1/chat/completions",
                new StringContent(JsonSerializer.Serialize(body), Encoding.UTF8, "application/json")
            );

            if (!response.IsSuccessStatusCode)
                return StatusCode((int)response.StatusCode, "Erro na OpenAI");

            var json = await response.Content.ReadAsStringAsync();
            var resposta = JsonDocument.Parse(json)
                .RootElement.GetProperty("choices")[0]
                .GetProperty("message").GetProperty("content")
                .GetString();

            // Salvar no banco
            var mensagem = new Mensagem
            {
                BotId = bot.Id,
                TextoUsuario = request.MensagemUsuario,
                RespostaBot = resposta,
                DataHora = DateTime.Now
            };

            _context.Mensagens.Add(mensagem);
            await _context.SaveChangesAsync();

            return Ok(new
            {
                resposta = mensagem.RespostaBot,
                data = mensagem.DataHora
            });
        }

        [HttpGet("{botId}/mensagens")]
        public async Task<IActionResult> ObterHistorico(int botId)
        {
            var mensagens = _context.Mensagens
                .Where(m => m.BotId == botId)
                .OrderBy(m => m.DataHora)
                .ToList();

            return Ok(mensagens);
        }
    }
}
