import { FC, FormEvent, useRef, useState } from "react";
import TextField from "@atoms/TextField";
import styles from "./Register.module.scss";
import { Button } from "@atoms/Button";
import { useRouter } from "next/router";
import { useUserService } from "../../../hooks/useUserService";
import { GoAsync } from "@lib/Shared/Utils/AsyncCode";
import { Alert } from "@atoms/Alert";

const Register: FC = () => {
  // STATE
  const [isLoading, setIsLoading] = useState(false);
  const [successfullRegistration, setSuccessfullRegistration] = useState(false);
  const [errors, setErrors] = useState<string>("Un error");

  // REF
  const form = useRef<HTMLFormElement>(null);

  // NAVIGATION
  const router = useRouter();

  // SERVICES
  const userService = useUserService();

  // HANDLERS
  const handleBackNavigation = () => router.push("/");

  const handleRegistration = async (e: FormEvent) => {
    e.preventDefault();
    setErrors("");
    setIsLoading(true);

    if (!form.current) return;

    const data = new FormData(form.current);

    const [, err] = await GoAsync(
      userService.CreateUser(data.get("UserName") as string, data.get("UserPassword") as string)
    );

    setIsLoading(false);

    if (err) {
      setErrors(err.message);
      return;
    }

    setSuccessfullRegistration(true);
    setTimeout(() => setSuccessfullRegistration(false), 5000);
  };

  return (
    <>
      {errors && (
        <Alert status="Error">
          <p>{errors}</p>
        </Alert>
      )}
      {!successfullRegistration && (
        <form onSubmit={handleRegistration} ref={form} className={styles["v1-form-container"]}>
          <div className={styles["v1-form-label"]}>
            <label>Nombre</label>
          </div>
          <TextField disabled={isLoading} type="text" name="UserName" />
          <div className={styles["v1-form-label"]}>
            <label>Contraseña</label>
          </div>
          <TextField disabled={isLoading} type="password" name="UserPassword" />
          <div style={{ height: "100px" }} />
          <div className={styles["v1-form-bottom"]}>
            <Button disabled={true} type="submit" className={styles["v1-right"]} status="Important">
              Sing Up
            </Button>
            <Button disabled={isLoading} type="button" className={styles["v1-left"]} onClick={handleBackNavigation}>
              Back
            </Button>
          </div>
        </form>
      )}
      {successfullRegistration && (
        <Alert status="Info">
          <h2>Registro completo</h2>
        </Alert>
      )}
    </>
  );
};

export default Register;
