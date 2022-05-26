using Shared.Domain.ValueObjects;

namespace sv_user_management.User.Domain.ValueObjects
{
    public class UserPassword : StringValueObject
    {
        #region Constructors

        private UserPassword() { }

        public UserPassword(string sPassword) : base(sPassword) { }

        #endregion
    }
}
