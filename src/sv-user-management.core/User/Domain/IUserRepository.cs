namespace sv_user_management.User.Domain
{
    public interface IUserRepository
    {
        public User[] List();

        public void Save(User user);
    }
}