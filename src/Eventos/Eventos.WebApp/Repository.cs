using System.Data.Entity;

namespace Eventos.WebApp
{
    public class Repository : DbContext
    {
        public DbSet<Evento> Eventos { get; set; }
    }
}