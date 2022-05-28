import { FC } from "react";
import { useLoginPresenter } from "./Login.presenter";
import Alert from "@atoms/Alert";
import TextField from "@atoms/TextField";
import styles from "./styles.module.scss";
import Button from "@atoms/Button";

interface LoginProps {
  goToRegisterForm: () => void;
}

export const Login: FC<LoginProps> = ({ goToRegisterForm }) => {
  const [model, operators] = useLoginPresenter();
  return (
    <>
      {model.errors && (
        <Alert status="Error">
          <p>{model.errors}</p>
        </Alert>
      )}
      <form onSubmit={operators.handleLogin} ref={model.form} className={styles["v1-form-container"]}>
        <div className={styles["v1-form-label"]}>
          <label htmlFor="">Nombre de usuario:</label>
        </div>
        <TextField disabled={model.isLoading} type="text" name="userName" />
        <div className={styles["v1-form-label"]}>
          <label htmlFor="">Password:</label>
        </div>
        <TextField disabled={model.isLoading} type="text" name="userPassword" />
        <div style={{ height: "100px" }} />
        <div className={styles["v1-form-bottom"]}>
          <Button disabled={model.isLoading} type="submit" className={styles["v1-right"]} status="Important">
            Sing In
          </Button>
          <Button onClick={goToRegisterForm} disabled={model.isLoading} type="button" className={styles["v1-left"]}>
            Register
          </Button>
        </div>
      </form>
    </>
  );
};
