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
            var repo = new Repository();
            var eventos = repo.Eventos.ToArray();
            return Request.CreateResponse(HttpStatusCode.OK, eventos);
        }

        public HttpResponseMessage Post(Evento evento)
        {
            var repo = new Repository();
            repo.Eventos.Add(evento);
            repo.SaveChanges();
            return Request.CreateResponse(HttpStatusCode.OK, evento);
        }
    }
}
