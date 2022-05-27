using Microsoft.EntityFrameworkCore;
using Shared.Domain;

namespace Shared.Infrastructure.Persistence.EntityFramework
{
    public abstract class EntityFrameworkRepository<T> : IEntityFrameworkRepository<T> where T : IAggregateRoot
    {
        #region Properties

        public DbContext _oContext;

        #endregion

        #region Constructors

        public EntityFrameworkRepository(DbContext oContext)
        {
            _oContext = oContext;
        }

        #endregion
    }
}
