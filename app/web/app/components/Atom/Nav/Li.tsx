import { FC, HTMLAttributes } from "react";
import cls from "classnames";
import styles from "./styles.module.scss";

export const Li: FC<HTMLAttributes<HTMLLIElement>> = ({ children, className, ...props }) => (
  <li className={cls(className, styles["v1-li"])}>{children}</li>
);
