using System;

namespace backend.Models
{
    public class Mensagem
{
    public int Id { get; set; }
    public string? TextoUsuario { get; set; }
    public string? RespostaBot { get; set; }
    public Bot? Bot { get; set; }
}

}
