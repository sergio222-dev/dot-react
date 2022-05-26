using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Shared.Infrastructure.Persistence.EntityFramework;
using sv_user_management.Shared;
using sv_user_management.User.Domain;

namespace sv_user_management.User.Infrastructure.Persistence;

public class EntityFrameworkUserRepository : IUserRepository
{
    #region Properties

    private readonly UserManager<IdentityUser> _manager;

    #endregion

    #region Contructors

    public EntityFrameworkUserRepository(UserManager<IdentityUser> manager)
    {
        _manager = manager;
    }

    #endregion

    #region Publics

    public async Task Add(Domain.User user)
    {
        //TODO should be in the repository?
        var userExists = await _manager.FindByNameAsync(user.Name.Value);

        if (userExists != null)
            throw new Exception("User exists");

        IdentityUser newUser = new()
        {
            Email = "molinasergio91@gmail.com",
            Id = user.Id.Value.ToString(),
            SecurityStamp = Guid.NewGuid().ToString(),
            UserName = user.Name.Value,
        };

        var result = await _manager.CreateAsync(newUser, user.Password.Value.ToString());

        if (!result.Succeeded)
            throw new Exception("User can't be created");
    }

    #endregion

}
