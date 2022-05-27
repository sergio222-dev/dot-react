import { FC, InputHTMLAttributes } from "react";
import cls from "classnames";
import styles from "./TextField.module.scss";

const TextField: FC<InputHTMLAttributes<HTMLInputElement>> = ({ className, ...inputProps }) => {
    return <input className={cls(className, styles["v1-text-field"])} {...inputProps} />;
};

export default TextField;
