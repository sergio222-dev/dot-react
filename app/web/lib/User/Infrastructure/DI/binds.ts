import { Container } from "inversify";
import { UserTypes } from "@lib/User/Infrastructure/DI/user.types";
import { useAxiosUserRepository } from "@lib/User/Infrastructure/Repository/useAxiosUserRepository";

export const BindUserTypes = (container: Container) => {
  container.bind<typeof useAxiosUserRepository>(UserTypes.UserRepository).toFunction(useAxiosUserRepository);
};
