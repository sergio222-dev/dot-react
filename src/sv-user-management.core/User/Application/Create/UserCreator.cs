﻿using Shared.Application;
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

    public void Create(UserId userId, UserName userName, UserPassword userPassword)
    {
        var oUser = Domain.User.Create(userId, userName, userPassword);
        
        _repository.Save(oUser);
        
        //TODO:Publish event here
    }

    #endregion
}