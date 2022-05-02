import { FC } from "react";
import Card from "@atoms/Card";
import Register from "@forms/Register";
import styles from "./RegisterFormCard.module.scss";

const RegisterFormCard: FC = () => {
  return (
    <Card className={styles["v1-register-form-card-container"]}>
      <Card.CardHeader className={styles["v1-register-form-card-header"]}>
        <h1>Registrarse</h1>
      </Card.CardHeader>
      <Card.CardContent>
        <Register />
      </Card.CardContent>
    </Card>
  );
};

export default RegisterFormCard;
