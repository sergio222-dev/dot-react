using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Shared.Infrastructure.Persistence.EntityFramework;
using sv_user_management.Shared;
using sv_user_management.User.Domain;

namespace sv_user_management.User.Infrastructure.Persistence;

public class EntityFrameworkUserRepository : EntityFrameworkRepository<Domain.User>, IUserRepository
{
    #region Contructors

    public EntityFrameworkUserRepository(UserManagementDbContext oContext) : base(oContext) {}

    #endregion

    #region Publics

    public Domain.User[] List()
    {
        return _oContext.Set<Domain.User>().AsQueryable().ToArray();
    }

    public void Save(Domain.User user)
    {
        _oContext.Add(user);
        _oContext.SaveChanges();
        Console.WriteLine("Saved user");
    }
    
    #endregion

}