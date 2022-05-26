namespace Shared.Domain.ValueObjects
{
    public abstract class ValueObject<T>
    {
        protected ValueObject() { }
        public ValueObject(T value) { }
        public T Value { get; protected set; }
    }
}
