//Responsavel por gerenciar e criar os bots
using Microsoft.AspNetCore.Mvc;
using backend.Data;
using backend.Models;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BotsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public BotsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/bots = Retorna a lista de bots
        [HttpGet]
        public ActionResult<IEnumerable<Bot>> GetBots()
        {
            var bots = _context.Bots.ToList();
            return Ok(bots);
        }

        // POST: api/bots = Cria um novo bot
        [HttpPost]
        public ActionResult<Bot> CreateBot([FromBody] Bot bot)
        {
            _context.Bots.Add(bot);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetBots), new { id = bot.Id }, bot);
        }
    }
}
