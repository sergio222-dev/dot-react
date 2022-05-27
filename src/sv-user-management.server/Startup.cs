using System;
using System.Data.Common;
using System.Data.SqlClient;
using Autofac;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Shared.Infrastructure;
using sv_user_management.configuration;
using sv_user_management.configuration.Modules;
using sv_user_management.Shared;

namespace WebApplication1
{
    public class Startup
    {

        private readonly IConfiguration _configuration;

        public ILifetimeScope AutofacContainer { get; private set; }
        public Startup(IConfiguration configuration)
        {
            this._configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddDefaultPolicy(policy =>
                {
                    policy.WithOrigins("http://localhost:3000", "https://localhost:3000").AllowAnyHeader().AllowAnyMethod();
                });
            });
            services.ConfigureServices(_configuration);

            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "sv-user-management.server v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
        }

        public void ConfigureContainer(ContainerBuilder builder)
        {
            Console.WriteLine(Logos.Autofac());

            Console.ForegroundColor = ConsoleColor.Blue;
            Console.WriteLine("Loading Modules...");

            builder.RegisterModule(new EntityFrameworkModule());

            builder.RegisterBuildCallback(_ =>
            {
                Console.ForegroundColor = ConsoleColor.Blue;
                Console.WriteLine("All Modules Loaded.");
            });

            Console.ResetColor();
        }
    }
}
