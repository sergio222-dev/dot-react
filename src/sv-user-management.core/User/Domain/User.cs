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

        private User() {}

        private User(UserId id, UserName name, UserPassword password)
        {
            this.Id = id;
            this.Name = name;
            this.Password = password;
        }

        #endregion

        #region Publics

        public static User Create(UserId oUserId, UserName oUserName, UserPassword oUserPassword)
        {
            var oUser = new User(oUserId, oUserName, oUserPassword);

            return oUser;
        }

        #endregion
    }
}