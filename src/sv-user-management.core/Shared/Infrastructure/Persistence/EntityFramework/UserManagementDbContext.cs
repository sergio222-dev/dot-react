using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using sv_user_management.User.Domain.ValueObjects;
using sv_user_management.User.Infrastructure.Persistence;


namespace sv_user_management.Shared
{
    public class UserManagementDbContext : IdentityDbContext<IdentityUser>
    {
        #region Sets

        // public DbSet<User.Domain.User> Users { get; set; }

        #endregion

        #region Constructors

        public UserManagementDbContext()
        {
        }

        public UserManagementDbContext(DbContextOptions<UserManagementDbContext> dbContextOptions) : base(dbContextOptions)
        {
        }

        #endregion

        #region Configure

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(UserManagementDbContext).Assembly);
            base.OnModelCreating(modelBuilder);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Project1");
            }

            base.OnConfiguring(optionsBuilder);
        }

        #endregion
    }
}
