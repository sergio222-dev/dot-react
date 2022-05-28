import { Container } from "inversify";
import Types from "@lib/Shared/Infrastructure/DI/Types";
import { RouterService, useRouterService } from "@lib/Shared/Presentation/useRouter";

export const BindUtilsTypes = (container: Container) => {
  container.bind<RouterService>(Types.Router).toFunction(useRouterService);
};
