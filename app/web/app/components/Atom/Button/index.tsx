import { ButtonHTMLAttributes, FC } from "react";
import cls from "classnames";
import styles from "./Button.module.scss";
import attr from "@lib/Shared/Presentation/utils/Attribute";
import { StatusType } from "@lib/Shared/Presentation/utils/Utils";

interface ButtonAttributes {
    status?: StatusType;
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps & ButtonAttributes> = ({ children, className, status, ...buttonProps }) => {
    return (
        <button {...attr({ status })} className={cls(className, styles["v1-button"])} {...buttonProps}>
            {children}
        </button>
    );
};
