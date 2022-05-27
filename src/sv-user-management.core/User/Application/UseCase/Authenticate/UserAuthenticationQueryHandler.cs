using System.Collections.Generic;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using sv_user_management.User.Application.Services;
using sv_user_management.User.Domain.ValueObjects;

namespace sv_user_management.User.Application.Authenticate;

public class UserAuthenticationQueryHandler : IRequestHandler<UserAuthenticateQuery, List<Claim>>
{
    #region Properties

    private readonly UserService _service;

    #endregion

    #region Constructor

    public UserAuthenticationQueryHandler(UserService service)
    {
        _service = service;
    }

    #endregion

    #region Publics

    public async Task<List<Claim>> Handle(UserAuthenticateQuery request, CancellationToken cancellationToken)
    {
        var oUserName = new UserName(request.UserName);
        var oUserPassword = new UserPassword(request.UserPassword);

        return await _service.Login(oUserName, oUserPassword);
    }

    #endregion
}
