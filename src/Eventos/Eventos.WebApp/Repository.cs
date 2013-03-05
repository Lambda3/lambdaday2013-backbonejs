using System.Data.Entity;

namespace Eventos.WebApp
{
    public class Repository : DbContext
    {
        public Repository()
            : base("EventosConnection")
        {
        }

        public DbSet<Evento> Eventos { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entities<Evento>().Configure(e => e.ToTable("Eventos"));
        }
    }
}