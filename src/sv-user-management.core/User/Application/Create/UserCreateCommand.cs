using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using MediatR;

namespace sv_user_management.User.Application.Create
{
    public sealed class UserCreateCommand : IRequest
    {
        #region Properties

        [Required] public Guid UserId { get; set; }

        [Required] public string UserName { get; set; }

        [Required] public string UserPassword { get; set; }

        #endregion

        #region Constructors

        public UserCreateCommand()
        {
        }

        public UserCreateCommand(Guid oUserId, string sUserName, string sUserPassword)
        {
            UserId = oUserId;
            UserName = sUserName;
            UserPassword = sUserPassword;
        }

        #endregion
    }
}