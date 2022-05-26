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
public class UserController : ControllerBase
{
    #region Properties

    private readonly ISender _mediator;
    private readonly UserManager<IdentityUser> _userManager;

    #endregion

    #region Contructors

    public UserController(ISender mediator, UserManager<IdentityUser> userManager)
    {
        _mediator = mediator;
        _userManager = userManager;
    }

    #endregion

    #region Actions

    [HttpPost]
    [Route("/create")]
    public async Task<IActionResult> Create(UserCreateCommand command)
    {
        await _mediator.Send(command);

        return Ok();
    }


    #endregion
}
