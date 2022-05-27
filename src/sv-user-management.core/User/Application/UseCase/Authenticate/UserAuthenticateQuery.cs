using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Security.Claims;
using MediatR;

namespace sv_user_management.User.Application.Authenticate;

public class UserAuthenticateQuery : IRequest<List<Claim>>
{
    #region Properties

    [Required] public string UserName { get; set; }

    [Required] public string UserPassword { get; set; }

    #endregion

    #region Constructors

    public UserAuthenticateQuery() { }

    public UserAuthenticateQuery(string userName, string userPassword)
    {
        UserName = userName;
        UserPassword = userPassword;
    }

    #endregion
}
