import { FC } from "react";
import Link from "next/link";
import { Nav, Li, Ul } from "@atoms/Nav";
import { Button } from "@atoms/Button";
import Container from "@atoms/Container";
import TextField from "@atoms/TextField";
import styles from "./AppBar.module.scss";

export const AppBar: FC = () => {
  return (
    <>
      <Container className={styles["v1-app-bar-container"]}>
        <header className={styles["v1-header"]}>
          <Nav>
            <Ul>
              <Li>
                <span>Home</span>
              </Li>
              <Li>
                <span>
                  <Link href="/register">Register</Link>
                </span>
              </Li>
            </Ul>
          </Nav>
          <div className="v1-flex-centered">
            <TextField className="v1-margin-side-1" placeholder="user name" type="text" />
            <TextField className="v1-margin-side-1" placeholder="password" type="password" />
            <Button color="Striking" className="v1-margin-side-2">
              Login
            </Button>
          </div>
        </header>
      </Container>
    </>
  );
};
