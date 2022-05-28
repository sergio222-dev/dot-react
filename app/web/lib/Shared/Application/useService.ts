import { useContainerContext } from "@context/ContainerContext";
import { useEffect, useState } from "react";

export const useService = <T>(type: symbol) => {
  // CONTEXT
  const container = useContainerContext();

  if (container === null) {
    throw new Error("Container not initialized");
  }

  // STATE
  const [service, setService] = useState<T>(() => container.get<T>(type));

  // EFFECT
  useEffect(() => {
    setService(() => container.get<T>(type));
  }, [container, type]);

  return service;
};
