import { FC, HTMLAttributes } from "react";
import styles from "./Alert.module.scss";
import cls from "classnames";
import { StatusType } from "@lib/Shared/Presentation/utils/Utils";
import attr from "@lib/Shared/Presentation/utils/Attribute";

interface AlertAttributes {
    status?: StatusType;
}

type AlertProps = HTMLAttributes<HTMLDivElement>;

export const Alert: FC<AlertProps & AlertAttributes> = ({ children, status, className }) => {
    return (
        <div {...attr({ status })} className={cls(className, styles["v1-alert-container"])}>
            {children}
        </div>
    );
};
