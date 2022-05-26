import {useContainerContext} from "@context/ContainerContext";

export const useRepository = <T>(type: symbol) => {
  // CONTEXT
  const container = useContainerContext();

  if (container === null) {
    throw new Error("Container not initialized");
  }

  return container.get<T>(type);
}
