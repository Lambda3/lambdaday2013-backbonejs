using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Eventos.WebApp.Controllers
{
    public class EventosController : ApiController
    {
        public HttpResponseMessage Get()
        {
            //var repo = new Repository();
            //var eventos = repo.Eventos.ToArray();
            //return Request.CreateResponse(HttpStatusCode.OK, eventos);

            var eventos = new List<Evento>()
                {
                    new Evento()
                        {
                            Id = 1,
                            Nome = "Evento 1",
                            Data = DateTime.Now.AddDays(10),
                            QuantidadeVagas = 100
                        },
                    new Evento()
                        {
                            Id = 2,
                            Nome = "Evento 2",
                            Data = DateTime.Now.AddDays(20),
                            QuantidadeVagas = 200
                        }
                };
            return Request.CreateResponse(HttpStatusCode.OK, eventos.ToArray());
        }

        public HttpResponseMessage Post(Evento evento)
        {
            //var repo = new Repository();
            //repo.Eventos.Add(evento);
            evento.Id = 3;
            var response = Request.CreateResponse(HttpStatusCode.OK, evento);
            return response;
        }
    }
}
