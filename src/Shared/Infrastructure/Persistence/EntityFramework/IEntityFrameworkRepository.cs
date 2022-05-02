using Shared.Domain;

namespace Shared.Infrastructure.Persistence.EntityFramework
{
    public interface IEntityFrameworkRepository<T> where T : IAggregateRoot
    {
        
    }
}