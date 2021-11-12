import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signUp } from "../../services/firebase";

import styles from "./index.module.scss";

import { InputFiled } from "../../components/inputField";
import { ImpButton } from "../../components/impButton";

export const SignUpPage = () => {
  const handleClick = () => {
    console.log("hello");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { push } = useHistory();

  const handlePassChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");

    try {
      await signUp(email, password);
      push("/profile");
    } catch (error) {
      // setError(error.message);
    }
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
            <form onSubmit={handleSubmit}>
              <input type="email" onChange={handleEmailChange} />
              <input type="password" onChange={handlePassChange} />
              <button type="submit">тест</button>
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
