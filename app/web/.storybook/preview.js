import "reflect-metadata";
import "../app/styles/app.scss";
import { BuildContainer } from "../lib/Shared/Infrastructure/DI/Inversify/Container";

BuildContainer();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
