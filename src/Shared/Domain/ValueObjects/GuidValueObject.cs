using System;

namespace Shared.Domain.ValueObjects
{
    public class GuidValueObject: ValueObject<Guid>
    {
        #region Constructors

        protected GuidValueObject() {}

        protected GuidValueObject(Guid oValue)
        {
            Value = oValue;
        }

        #endregion
    }
}