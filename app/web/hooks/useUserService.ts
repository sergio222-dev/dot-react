import { useService } from "./useService";
import Types from "@lib/Shared/Infrastructure/DI/Types";
import { UserService } from "@lib/User/Application/UserService";

export const useUserService = () => {
  return useService<UserService>(Types.UserService);
};
