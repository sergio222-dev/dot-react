import "reflect-metadata";
import { Container } from "inversify";
import { BindUserTypes } from "@lib/User/Infrastructure/DI/user.bind";
import { BindUtilsTypes } from "@lib/Shared/Infrastructure/DI/utils.bind";

// eslint-disable-next-line no-var
export var container: Container;

export const BuildContainer = () => {
  container = new Container();
  // Binds
  BindUserTypes(container);
  BindUtilsTypes(container);
};
