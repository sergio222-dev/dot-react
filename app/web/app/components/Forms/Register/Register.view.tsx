import { FC } from "react";
import TextField from "@atoms/TextField";
import Alert from "@atoms/Alert";
import Button from "@atoms/Button";
import styles from "./styles.module.scss";
import { useRegisterPresenter } from "./Register.presenter";

interface RegisterProps {
  goToLogin: () => void;
}

export const Register: FC<RegisterProps> = ({ goToLogin }) => {
  const [model, operators] = useRegisterPresenter();

  return (
    <>
      {model.errors && (
        <Alert status="Error">
          <p>{model.errors}</p>
        </Alert>
      )}
      {!model.successfulRegistration && (
        <form onSubmit={operators.handleRegistration} ref={model.form} className={styles["v1-form-container"]}>
          <div className={styles["v1-form-label"]}>
            <label>Nombre</label>
          </div>
          <TextField disabled={model.isLoading} type="text" name="UserName" />
          <div className={styles["v1-form-label"]}>
            <label>Contraseña</label>
          </div>
          <TextField disabled={model.isLoading} type="password" name="UserPassword" />
          <div style={{ height: "100px" }} />
          <div className={styles["v1-form-bottom"]}>
            <Button disabled={model.isLoading} type="submit" className={styles["v1-right"]} status="Important">
              Sing Up
            </Button>
            <Button disabled={model.isLoading} type="button" className={styles["v1-left"]} onClick={goToLogin}>
              Back
            </Button>
          </div>
        </form>
      )}
      {model.successfulRegistration && (
        <Alert status="Info">
          <h2>Registro completo</h2>
        </Alert>
      )}
    </>
  );
};
