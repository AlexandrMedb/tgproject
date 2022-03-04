import React from "react";
import { updateProfile } from "firebase/auth";
import { auth } from "../../services/firebase";
import { signUp } from "../../services/firebase";
import { Link, useHistory } from "react-router-dom";

import styles from "./index.module.scss";

import { InputFiled } from "../../components/inputField";
import { ImpButton } from "../../components/impButton";

export const SignUpPage = () => {
  const { push } = useHistory();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await signUp(e.target.email.value, e.target.password.value);
      if (auth.currentUser) {
        updateProfile(auth.currentUser, {
          displayName: e.target.name.value,
          photoURL:
            "https://static8.depositphotos.com/1207999/1027/i/600/depositphotos_10275300-stock-photo-business-man-avatar-profile.jpg",
        });
      }
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
              <InputFiled name="name" type="text" title="username" />
              <InputFiled name="email" type="email" title="email" />
              <InputFiled name="password" type="password" title="password" />
              <ImpButton text="Начать приключение" />
              <div className={styles.linkBlock}>
                <p>
                  <span>Already have an account? </span>
                  <Link to="/login">Sign In</Link>
                </p>
                <p>
                  <span>Cant sign in? </span>
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
