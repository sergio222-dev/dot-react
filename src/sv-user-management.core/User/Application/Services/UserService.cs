using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Shared.Application;
using sv_user_management.User.Domain;
using sv_user_management.User.Domain.ValueObjects;

namespace sv_user_management.User.Application.Services;

public class UserService : IService
{
    #region Properties

    private readonly IUserRepository _repository;
    private readonly UserManager<IdentityUser> _userManager;

    #endregion

    #region Constructors

    public UserService(IUserRepository repository, UserManager<IdentityUser> userManager)
    {
        _repository = repository;
        _userManager = userManager;
    }

    #endregion

    #region Publics

    public async Task Create(UserId userId, UserName userName, UserPassword userPassword)
    {
        var oIdentityUser = await _userManager.FindByNameAsync(userName.Value);

        if (oIdentityUser != null) throw new Exception("User already exists!");

        IdentityUser oUser = new()
        {
            Email = "molinasergio91@gmail.com",
            SecurityStamp = Guid.NewGuid().ToString(),
            UserName = userName.Value,
            Id = userId.Value.ToString(),
        };

        var oResult = await _userManager.CreateAsync(oUser, userPassword.Value);

        if (!oResult.Succeeded) throw new Exception("Error en la password");

        //TODO:Publish event here
    }

    public async Task<List<Claim>> Login(UserName userName, UserPassword userPassword)
    {
        // TODO Validate user useCase Query
        var oUser = await _userManager.FindByNameAsync(userName.Value);
        if (oUser == null)
            throw new Exception("User not found");
        if (!await _userManager.CheckPasswordAsync(oUser, userPassword.Value))
            throw new Exception("Password incorrect!");

        //TODO Get Claims user useCase Query
        var lstUserRoles = await _userManager.GetRolesAsync(oUser);

        var lstAuthClaims = new List<Claim>
        {
            new(ClaimTypes.Name, oUser.UserName),
            new(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
        };

        foreach (var sUserRole in lstUserRoles)
        {
            lstAuthClaims.Add(new Claim(ClaimTypes.Role, sUserRole));
        }

        return lstAuthClaims;
    }

    #endregion
}
