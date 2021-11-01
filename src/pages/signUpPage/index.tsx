import React from "react";
import { Link } from "react-router-dom";

import styles from "./index.module.scss";

import { InputFiled } from "../../components/inputField";
import { ImpButton } from "../../components/impButton";

export const SignUpPage = () => {
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
        <h2>Virtual Table</h2>
        <section>
          <div className={styles.left}>
            <form action="">
              <InputFiled type="text" title="username" />
              <InputFiled type="email" title="email" />
              <InputFiled type="password" title="password" />
              <ImpButton text="Начать приключение" event={handleClick} />
              <div className={styles.linkBlock}>
                <p>
                  <span>Already have an account? </span>
                  <Link to="/login">Sign In</Link>
                </p>
                <p>
                  <span>Can't sign in? </span>
                  <Link to="/home">Forgot Password</Link>
                </p>
              </div>
            </form>
          </div>
          <div className={styles.right}>
            <p>Добро пожаловать на MVP страницу виртуального игрового стола</p>
          </div>
        </section>
      </main>
    </div>
  );
};
