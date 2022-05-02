using System;
using Shared.Domain.ValueObjects;

namespace sv_user_management.User.Domain.ValueObjects;

public class UserId : GuidValueObject
{
    #region Contructors

    private UserId() {}
    
    public UserId(Guid oGuid) : base (oGuid) {}

    #endregion
}