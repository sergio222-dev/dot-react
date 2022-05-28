import { HTMLAttributes } from "react";
import styles from "./Card.module.scss";
import cls from "classnames";
import { withSlots } from "react-slot-component";

type CardSlots = {
  CardHeader: HTMLAttributes<HTMLDivElement>;
  CardContent: HTMLAttributes<HTMLDivElement>;
};

export const Card = withSlots<CardSlots, HTMLAttributes<HTMLDivElement>>(
  ({
    slotProps,
    className,
    ...containerProps
    // ...divProps
  }) => {
    return (
      <div {...containerProps} className={cls(styles["card"], className)}>
        {slotProps.CardHeader && <div {...slotProps.CardHeader}>{slotProps.CardHeader.children}</div>}
        {slotProps.CardContent && (
          <div {...slotProps.CardContent} className={cls(styles["v1-card-content"], slotProps.CardContent.className)}>
            {slotProps.CardContent.children}
          </div>
        )}
      </div>
    );
  }
);
