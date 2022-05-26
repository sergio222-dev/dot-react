import { NextPage } from "next";
import RegisterFormCard from "@organism/RegisterFormCard";
import styles from "../app/templates/pages/register.module.scss";

const Register: NextPage = () => {
  return (
    <section className={styles["v1-register-container"]}>
      <RegisterFormCard />
    </section>
  );
};

export default Register;
