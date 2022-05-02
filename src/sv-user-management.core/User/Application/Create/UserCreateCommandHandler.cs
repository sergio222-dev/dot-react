using System.Threading;
using System.Threading.Tasks;
using MediatR;
using sv_user_management.User.Domain.ValueObjects;

namespace sv_user_management.User.Application.Create;

public class UserCreateCommandHandler : IRequestHandler<UserCreateCommand, Unit>
{
    #region Properties

    private UserCreator UserCreator;

    #endregion

    #region Constructors

    public UserCreateCommandHandler(UserCreator creator)
    {
        UserCreator = creator;
    }

    #endregion

    #region Task

    public async Task<Unit> Handle(UserCreateCommand command, CancellationToken cancellationToken)
    {
        var id = new UserId(command.UserId);
        var name = new UserName(command.UserName);
        var password = new UserPassword(command.UserPassword);
        
        UserCreator.Create(id, name, password);
        
        return Unit.Value;
    }

    #endregion
}