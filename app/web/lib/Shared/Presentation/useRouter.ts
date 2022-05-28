import { NextRouter, useRouter } from "next/router";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Models {}

interface Operators {
  createHandlerPush: (route: string) => () => void;
}

export type RouterService = () => [Models, Operators, NextRouter];

export const useRouterService: RouterService = () => {
  const router = useRouter();

  const createHandlerPush = (route: string) => () => router.push(route);

  return [
    {},
    {
      createHandlerPush,
    },
    router,
  ];
};
