// Modelo de dados para a Mensagem, que armazena informações sobre as interações entre o usuário e o bot

using System;

namespace backend.Models
{
    public class Mensagem
    {
        public int Id { get; set; }

        // Obrigatório, pois você sempre envia esse valor
        public string TextoUsuario { get; set; } = string.Empty;

        public string RespostaBot { get; set; } = string.Empty;
    
        public DateTime DataHora { get; set; }

        // Chave estrangeira
        public int BotId { get; set; }

        // Navegação
        public Bot Bot { get; set; } = null!;
    }
}
