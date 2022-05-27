using Microsoft.AspNetCore.Identity;
using Shared.Domain;
using sv_user_management.User.Domain.ValueObjects;

namespace sv_user_management.User.Domain
{
    public class User : IAggregateRoot
    {
        #region Properties

        public UserId Id { get; private set; }

        public UserName Name { get; private set; }

        public UserPassword Password { get; private set; }



        #endregion

        #region Constructors

        private User() { }

        private User(UserId id, UserName name, UserPassword password)
        {
            Id = id;
            Name = name;
            Password = password;

        }

        #endregion

        #region Publics

        public static User Create(UserId userId, UserName userName, UserPassword userPassword)
        {
            var oUser = new User(userId, userName, userPassword);

            return oUser;
        }

        #endregion
    }
}
