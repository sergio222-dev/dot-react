import "reflect-metadata";
import { Container } from "inversify";
import { BindUserTypes } from "@lib/User/Infrastructure/DI/binds";

// eslint-disable-next-line no-var
export var container: Container;

export const BuildContainer = () => {
  container = new Container();
  // Binds
  BindUserTypes(container);
};
