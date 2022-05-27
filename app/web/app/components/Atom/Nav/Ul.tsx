import cls from "classnames";
import { FC, HTMLAttributes } from "react";
import styles from "./styles.module.scss";

export const Ul: FC<HTMLAttributes<HTMLUListElement>> = ({ children, className, ...props }) => {
    return (
        <ul className={cls(className, styles["v1-ul"])} {...props}>
            {children}
        </ul>
    );
};
