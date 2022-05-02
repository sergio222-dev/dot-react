import { container } from "@lib/Shared/Infrastructure/DI/Container";

export const useService = <T>(type: symbol) => {
  return container.get<T>(type);
};
