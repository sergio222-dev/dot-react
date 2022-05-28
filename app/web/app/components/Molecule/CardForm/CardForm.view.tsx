import { FC, PropsWithChildren } from "react";
import Card from "@atoms/Card";
import styles from "./styles.module.scss";

interface CardFormViewProps {
  title: string;
}

export const CardForm: FC<PropsWithChildren<CardFormViewProps>> = ({ children, title }) => {
  return (
    <Card className={styles["v1-card-form-container"]}>
      <Card.CardHeader className={styles["v1-card-form-header"]}>
        <h1>{title}</h1>
      </Card.CardHeader>
      <Card.CardContent>{children}</Card.CardContent>
    </Card>
  );
};
