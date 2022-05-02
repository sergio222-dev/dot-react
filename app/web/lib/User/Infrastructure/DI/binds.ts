import { Container } from "inversify";
import { UserRepository } from "@lib/User/Domain/UserRepository";
import { UserService } from "@lib/User/Application/UserService";
import { UserTypes } from "@lib/User/Infrastructure/DI/user.types";
import { AxiosUserRepository } from "@lib/User/Infrastructure/AxiosUserRepository";

export const BindUserTypes = (container: Container) => {
  // container.bind<UserRepository>(UserTypes.UserRepository).to(FetcherUserRepository);
  container.bind<UserRepository>(UserTypes.UserRepository).to(AxiosUserRepository);
  container.bind<UserService>(UserTypes.UserService).to(UserService);
};
