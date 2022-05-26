using System.Threading;
using System.Threading.Tasks;
using MediatR;

namespace sv_user_management.User.Domain
{
    public interface IUserRepository
    {
        // public User[] List();

        public Task Add(User user);
    }
}
