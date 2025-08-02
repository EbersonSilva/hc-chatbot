using System;

namespace backend.Models
{
    public class Mensagem
    {
        public int Id { get; set; }
        public int BotId { get; set; }
        public string TextoUsuario { get; set; }
        public string RespostaBot { get; set; }
        public DateTime DataHora { get; set; } = DateTime.Now;

        public Bot Bot { get; set; }
    }
}
