using Shared.Domain.ValueObjects;

namespace sv_user_management.User.Domain.ValueObjects
{
    public class UserName: StringValueObject
    {
        #region Constructors

        private UserName() {}
        
        public UserName(string sUserName) : base(sUserName) {}

        #endregion
    }
}