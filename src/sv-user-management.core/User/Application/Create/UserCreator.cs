using System.Threading.Tasks;
using Shared.Application;
using sv_user_management.Shared;
using sv_user_management.User.Domain;
using sv_user_management.User.Domain.ValueObjects;

namespace sv_user_management.User.Application.Create;

public class UserCreator: IService
{
    #region Properties

    private IUserRepository _repository;

    #endregion

    public UserCreator(IUserRepository repository)
    {
        _repository = repository;
    }

    #region Publics

    public async Task Create(UserId userId, UserName userName, UserPassword userPassword)
    {
        var oUser = Domain.User.Create(userId, userName, userPassword);
        
        await _repository.Register(oUser);
        
        //TODO:Publish event here
    }

    #endregion
}