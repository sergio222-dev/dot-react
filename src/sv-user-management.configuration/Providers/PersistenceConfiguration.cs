using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using sv_user_management.Shared;

namespace sv_user_management.configuration.Providers
{
    public static class PersistenceConfiguration
    {
        public static IServiceCollection ConfigurePersistenceServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<UserManagementDbContext>(
                options => options.UseSqlServer(configuration.GetConnectionString("Project1"))
            );
            // services.AddDbContext<UserManagementDbContext>();
            
            return services;
        }
    }
}