using System;
using System.Net.Http;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using sv_user_management.User.Application.Create;
using sv_user_management.User.Domain.ValueObjects;
using sv_user_management.User.Infrastructure.Persistence;

namespace WebApplication1.Controllers;
[ApiController]
[Route("[controller]")]
public class UserController: ControllerBase
{
    #region Properties

    private readonly ISender _mediator;
    private readonly UserManager<IdentityUser> _userManager;

    #endregion

    #region Contructors

    public UserController(ISender mediator, UserManager<IdentityUser> userManager)
    {
        // var userId = new UserId(Guid.NewGuid());
        // var userName = new UserName("sergion");
        // var userPass = new UserPassword("sergion");
        // var user = sv_user_management.User.Domain.User.Create(userId, userName, userPass);
        // userManager.CreateAsync(user, "a");
        _mediator = mediator;
        _userManager = userManager;
    }

    #endregion

    #region Actions

    [HttpPost]
    [Route("/create")]
    public async Task<IActionResult> Create(UserCreateCommand command)
    {
        
        // Console.WriteLine(user.UserName);
        // await CreateAsync();
        await _mediator.Send(command);

        return Ok();
    }

    private async Task CreateAsync()
    {
        var sergio = await _userManager.FindByNameAsync("sergio2");
        
        IdentityUser newUser = new()
        {
            Email = "molinasergio91@gmail.com",
            SecurityStamp = Guid.NewGuid().ToString(),
            UserName = "sergio2",
        };
        
        var result = await _userManager.CreateAsync(newUser, "Carlitos2!");

        Console.WriteLine(result);
        
        Console.WriteLine(sergio);
    }

    #endregion
}