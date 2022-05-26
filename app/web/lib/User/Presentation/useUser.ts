import {useService} from "@lib/Shared/Infrastructure/useService";
import {UserRepositoryType} from "@lib/User/Domain/UserRepository";
import Types from "@lib/Shared/Infrastructure/DI/Types";
import {useUserService} from "@lib/User/Application/useUserService";

export const useUser = () => {
  const userRepository = useService<UserRepositoryType>(Types.UserRepository);

  const userServices = useUserService(userRepository);

  return [userServices];
}
