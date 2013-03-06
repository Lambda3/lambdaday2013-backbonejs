using System.Data.Entity;
using System.Web.Http;

namespace Eventos.WebApp
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            WebApiConfig.Register(GlobalConfiguration.Configuration);
            Database.SetInitializer(new CreateDatabaseIfNotExists<Repository>());
       }
    }
}