using Microsoft.Extensions.DependencyInjection;

namespace sv_user_management.configuration.Providers;

public static class SwaggerConfiguration
{
    public static IServiceCollection ConfigureSwaggerServices(this IServiceCollection services)
    {
        services.AddSwaggerGen(x =>
        {
            x.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo
            {
                Title = "Dot Net Project 1",
                Version = "v1",
                Description = "REST API"
            });
        });

        return services;
    }
}