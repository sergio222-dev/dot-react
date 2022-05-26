import {UserRepositoryType} from "@lib/User/Domain/UserRepository";
import {GUID} from "@lib/Shared/Utils/GUID";
import {User} from "@lib/User/Domain/User";

// Application Data Model
interface RegisterUserModel {
  userName: string;
  userPassword: string;
}

export const useUserService = (userRepository: UserRepositoryType) => {

  const userRepositoryActions = userRepository();

  const RegisterUser = async (formData: RegisterUserModel) => {
    const id = GUID();
    const user: User = User.CREATE(id, formData.userName, formData.userPassword);

    await userRepositoryActions.Save(user);
  }

  return {
    RegisterUser,
  };
};
