using System;

namespace Eventos.WebApp
{
    public class Evento
    {
        public int Id { get; set; }

        public string Nome { get; set; }

        public DateTime Data { get; set; }

        public int QuantidadeVagas { get; set; }
    }
}