using System;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Shared.Domain.ValueObjects;

namespace Shared.Infrastructure.Persistence.EntityFramework;

public static class EntityTypeBuilderValueObject
{
    public static EntityTypeBuilder ValueObjectProperty<TValueObject, TValue>(this EntityTypeBuilder builder, string Name) where TValueObject : ValueObject<TValue> where TValue : class
    {
        builder
            .Property<TValueObject>(Name)
            .HasConversion(
                valueObject => valueObject.Value,
                value => (TValueObject)Activator.CreateInstance(typeof(TValueObject), Name),
                new ValueComparer<TValueObject>(
                    (l, r) => l.Value == r.Value,
                    v => v.Value.GetHashCode(),
                    v => (TValueObject)Activator.CreateInstance(typeof(TValueObject), v.Value)
                )
            );
        return builder;
    }
}
