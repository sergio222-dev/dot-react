import "reflect-metadata";
import "../templates/global.scss";
import { BuildContainer } from "../lib/Shared/Infrastructure/DI/Container";

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
