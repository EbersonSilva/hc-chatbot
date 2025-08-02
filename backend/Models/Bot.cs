using System.Collections.Generic;

namespace backend.Models
{
    public class Bot
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Contexto { get; set; }

        public List<Mensagem> Mensagens { get; set; } = new();
    }
}
