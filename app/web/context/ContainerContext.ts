import { createContext, useContext } from "react";
import { interfaces } from "inversify";
import Container = interfaces.Container;

export const ContainerContext = createContext<Container | null>(null);

export const useContainerContext = () => useContext<Container | null>(ContainerContext);
