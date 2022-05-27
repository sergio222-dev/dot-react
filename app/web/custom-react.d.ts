import React from "react";
import { interfaces } from "inversify";

declare module "react" {
  import Container = interfaces.Container;
  // typing for component that use container provider
  type FCP<P = unkown & { container: Container }> = React.FunctionComponent<P>;

  // TODO don't work, use FCP type
  // type FC<P = unkown & { container: Container}> = React.FunctionComponent<P>;
}
