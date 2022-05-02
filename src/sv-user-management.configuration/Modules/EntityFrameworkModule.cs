using System;
using System.Linq;
using System.Reflection;
using Autofac;
using Module = Autofac.Module;

namespace sv_user_management.configuration.Modules;

public class EntityFrameworkModule : Module
{

    #region Properties

    private const string CORE_NAMESPACE = "sv-user-management.core";

    #endregion
    
    #region Override

    protected override void Load(ContainerBuilder builder)
    {
        Console.ForegroundColor = ConsoleColor.Green;
        Console.BackgroundColor = ConsoleColor.Black;
        Console.WriteLine("Loading EntityFramework Repository Module...", ConsoleColor.Blue);

        var assembly = Assembly.Load(CORE_NAMESPACE);
        
        // Register all the EntityFramework Repository
        builder
            .RegisterAssemblyTypes(assembly)
            .Where(t => t.Name.StartsWith("EntityFramework") && t.Name.EndsWith("Repository"))
            .AsImplementedInterfaces();

        base.Load(builder);
    }

    #endregion
}