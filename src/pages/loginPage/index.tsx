import React from "react";

import { Link, useHistory } from "react-router-dom";
import { signIn } from "../../services/firebase";

import styles from "./index.module.scss";

import { InputFiled } from "../../components/inputField";
import { ImpButton } from "../../components/impButton";

export const LoginPage = () => {
  const { push } = useHistory();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await signIn(e.target.email.value, e.target.password.value);
      e.target.email.value = "";
      e.target.password.value = "";
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
        <h2>Welcome Back</h2>
        <section>
          <div className={styles.left}>
            <form onSubmit={handleSubmit}>
              <InputFiled name="email" type="email" title="email" />
              <InputFiled name="password" type="password" title="password" />
              <ImpButton text="Вернуться к приключению" />
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
