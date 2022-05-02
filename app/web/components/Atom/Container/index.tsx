import { FC, HTMLAttributes } from "react";
import cls from "classnames";
import layout from "@templates/layout.module.scss";

/**
 *
 * @description Component created for section
 */
const Container: FC<HTMLAttributes<HTMLElement>> = ({
  children,
  className,
  ...sectionProps
}) => (
  <div className={cls(className, layout.container)} {...sectionProps}>
    {children}
  </div>
);

export default Container;
