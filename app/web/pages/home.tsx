import type { NextPage } from "next";
import AppBar from "@organism/AppBar";
import Container from "@atoms/Container";
import styles from "@templates/pages/home.module.scss";

const Home: NextPage = () => {
  return (
    <section>
      <div className={styles["v1-logo-bar"]}></div>
      <Container>
        <AppBar />
      </Container>
    </section>
  );
};

export default Home;
