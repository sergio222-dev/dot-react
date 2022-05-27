namespace Shared.Domain.ValueObjects
{
    public abstract class StringValueObject : ValueObject<string>
    {
        #region Constructors

        protected StringValueObject() { }

        protected StringValueObject(string sValue)
        {
            Value = sValue;
        }

        #endregion
    }
}
