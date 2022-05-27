import { FC, HTMLAttributes } from "react";
import styles from "./styles.module.scss";
import cls from "classnames";

export const Nav: FC<HTMLAttributes<HTMLElement>> = ({ children, className, ...navProps }) => {
    return (
        <nav {...navProps} className={cls(className, styles["v1-nav"])}>
            {children}
        </nav>
    );
};
