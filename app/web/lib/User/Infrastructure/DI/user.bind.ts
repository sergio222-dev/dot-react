import { Container } from "inversify";
import { UserTypes } from "@lib/User/Infrastructure/DI/user.types";
import { useAxiosUserRepository } from "@lib/User/Infrastructure/Repository/useAxiosUserRepository";
import { UserRepositoryType } from "@lib/User/Domain/UserRepository";

export const BindUserTypes = (container: Container) => {
  container.bind<UserRepositoryType>(UserTypes.UserRepository).toFunction(useAxiosUserRepository);
};
