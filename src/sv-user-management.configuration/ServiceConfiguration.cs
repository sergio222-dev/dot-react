using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using sv_user_management.configuration.Providers;

namespace sv_user_management.configuration
{
    public static class ServiceConfiguration
    {
        public static IServiceCollection ConfigureServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.ConfigurePersistenceServices(configuration);
            services.ConfigureApplicationServices();
            services.ConfigureMediatorServices();
            services.ConfigureSwaggerServices();
            
            return services;
        }
    }
}