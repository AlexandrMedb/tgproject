import React from "react";
import { ImpLink } from "../../components/impLink";
import { MainNavBar } from "../../components/mainNavBar";
import styles from "./index.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <MainNavBar />
      <div className={styles.headerWrapper}>
        <header>
          <div className={styles.left}>
            <h1>Самый легкий способ поиграть в D&D онлай, бесплатно</h1>

            <ImpLink to="/signup" text="Бесплатная регистрация" />
          </div>
          <div className={styles.right}>
            <img src="./img/mainHeader.jpg" alt="" />
          </div>
        </header>
      </div>
      <div className={styles.container}>
        <section className={styles.systemAdv}>
          <h2>Присоединяйся и играй</h2>
          <p>OwlBear поможет тебе освоить игровые механики</p>

          <img src="./img/OwlBear_logo.png" alt="dndLogo" />
        </section>
      </div>
    </div>
  );
};
