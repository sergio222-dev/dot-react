using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Shared.Infrastructure.Persistence.EntityFramework;
using sv_user_management.User.Domain.ValueObjects;

namespace sv_user_management.User.Infrastructure;

public class UserConfiguration : IEntityTypeConfiguration<Domain.User>
{
    #region Publics

    public void Configure(EntityTypeBuilder<Domain.User> builder)
    {
        builder.ToTable("Users");
        builder.HasKey(user => new { user.Id });
        builder
            .Property<UserId>("Id")
            .HasConversion(
                id => id.Value,
                guid => new UserId(guid),
                new ValueComparer<UserId>(
                    (l, r) => l.Value == r.Value,
                    v => v.Value.GetHashCode(),
                    v => new UserId(v.Value)
                )
            );
        // builder.Property<UserName>("Name").HasConversion<string>();
        // builder.Property<UserPassword>("Password").HasConversion<string>();
        builder.ValueObjectProperty<UserName, string>("Name");
        builder.ValueObjectProperty<UserPassword, string>("Password");
        
        Console.WriteLine("Configurado User");
    }

    #endregion
}