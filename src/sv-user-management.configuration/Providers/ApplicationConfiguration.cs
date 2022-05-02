using System.Linq;
using System.Reflection;
using Microsoft.Extensions.DependencyInjection;
using Shared.Application;

namespace sv_user_management.configuration.Providers;

public static class ApplicationConfiguration
{
    private const string CORE_NAMESPACE = "sv-user-management.core";
    public static IServiceCollection ConfigureApplicationServices(this IServiceCollection services)
    {
        // Register all application services
        var assembly = Assembly.Load(CORE_NAMESPACE);
        foreach (var ti in assembly.DefinedTypes)
        {
            if (ti.ImplementedInterfaces.Contains(typeof(IService)))
            {
                services.AddScoped(ti);
            }
        }

        return services;
    }
}