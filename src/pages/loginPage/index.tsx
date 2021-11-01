import React from "react";

import { Link } from "react-router-dom";

import styles from "./index.module.scss";

import { InputFiled } from "../../components/inputField";
import { ImpButton } from "../../components/impButton";

export const LoginPage = () => {
  const handleClick = () => {
    console.log("hello");
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="./Owlbear_logo.png" alt="" />
        <h1>OwlBear</h1>
      </div>
      <main className={styles.signup}>
        <h2>Wlcome Back</h2>
        <section>
          <div className={styles.left}>
            <form action="">
              <InputFiled type="email" title="email" />
              <InputFiled type="password" title="password" />
              <ImpButton text="Вернуться к приключению" event={handleClick} />
              <div className={styles.linkBlock}>
                <p>
                  <span>Need an account? </span>
                  <Link to="/signup">Sign Up</Link>
                </p>
                <p>
                  <span>Can't sign in? </span>
                  <Link to="/home">Forgot Password</Link>
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};
