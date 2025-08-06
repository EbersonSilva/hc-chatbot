
using Microsoft.EntityFrameworkCore; //facilita a comunicação com o banco de dados
using backend.Models;

namespace backend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Bot> Bots { get; set; } //Tabela de Bots
        public DbSet<Mensagem> Mensagens { get; set; } //Tabela de Mensagens
    }
}
