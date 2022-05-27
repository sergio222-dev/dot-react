using System.Linq;
using System.Reflection;
using MediatR;
using Microsoft.Extensions.DependencyInjection;

namespace sv_user_management.configuration.Providers;

public static class MediatorConfiguration
{
    private const string CoreNamespace = "sv-user-management.core";
    public static IServiceCollection ConfigureMediatorServices(this IServiceCollection services)
    {
        var types = Assembly.Load(CoreNamespace).GetTypes().Where(a => a.IsClass && a.Name.EndsWith("Handler")).ToArray();
        services.AddMediatR(types);

        return services;
    }
}
