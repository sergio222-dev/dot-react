import { NextPage } from "next";
import RegisterLoginForm from "@organism/RegisterLoginForm";
import styles from "@templates/pages/registerLogin.module.scss";

const Index: NextPage = () => {
  return (
    <section className={styles["v1-register-login-container"]}>
      <RegisterLoginForm />
    </section>
  );
};

export default Index;
