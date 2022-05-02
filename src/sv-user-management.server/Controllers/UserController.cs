using System;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using sv_user_management.User.Application.Create;

namespace WebApplication1.Controllers;
[ApiController]
[Route("[controller]")]
public class UserController: ControllerBase
{
    #region Properties

    private readonly ISender _mediator;

    #endregion

    #region Contructors

    public UserController(ISender mediator)
    {
        _mediator = mediator;
    }

    #endregion

    #region Actions

    [HttpPost]
    [Route("/create")]
    public async Task<IActionResult> Create(UserCreateCommand command)
    {
        
        // Console.WriteLine(user.UserName);
        await _mediator.Send(command);

        return Ok();
    }

    #endregion
}