using System.Linq;
using System.Reflection;
using MediatR;
using Microsoft.Extensions.DependencyInjection;

namespace sv_user_management.configuration.Providers;

public static class MediatorConfiguration
{
    private const string CORE_NAMESPACE = "sv-user-management.core";
    public static IServiceCollection ConfigureMediatorServices(this IServiceCollection services)
    {
        var types = Assembly.Load(CORE_NAMESPACE).GetTypes().Where(a => a.IsClass && a.Name.EndsWith("Handler")).ToArray();
        services.AddMediatR(types);
        
        return services;
    }
}