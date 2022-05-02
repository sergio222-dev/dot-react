using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using sv_user_management.User.Domain.ValueObjects;


namespace sv_user_management.Shared
{
    public class UserManagementDbContext: DbContext
    {
        #region Sets

        public DbSet<User.Domain.User> Users { get; set; }

        #endregion

        #region Constructors

        public UserManagementDbContext() {}

        public UserManagementDbContext(DbContextOptions dbContextOptions) : base(dbContextOptions) {}

        #endregion

        #region Configure

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(UserManagementDbContext).Assembly);
            base.OnModelCreating(modelBuilder);
        }

        // protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        // {
        //     if (!optionsBuilder.IsConfigured)
        //     {
        //         optionsBuilder.UseSqlServer("Project1");
        //     }
        // }

        #endregion
    }
}