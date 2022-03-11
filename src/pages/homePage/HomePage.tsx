import React from 'react';
// common components
import {ImpLink} from '../../components/common/impLink';
import {MainNavBar} from '../../components/common/mainNavBar/MainNavBar';
// special components
import {AnimatedImg} from './components/animatedImg/AnimatedImg';
import styles from './index.module.scss';

export const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <MainNavBar />
      <div className={styles.headerWrapper}>
        <header>
          <div className={styles.left}>
            <h1>Самый легкий способ поиграть в D&D онлайн, бесплатно</h1>

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
        <AnimatedImg />

        <section className={styles.usersPages}>
          <div className={styles.text}>
            <h2>Создавайте детализированные и захватывающие миры</h2>
            <p>
              Создавайте эпические карты сражений, используя огромную коллекцию
              декораций, реквизита и жетонов, или загружайте свои собственные.
              Пользователи Pro получают доступ к более чем 16 000+ активов и
              свежим новым пакетам каждый месяц. Добавляйте погоду, визуальные
              эффекты, триггеры и многое другое с помощью простых в
              использовании инструментов.
            </p>

            <ImpLink to="/masterAdvPage" text="Изучите инструменты мастера" />
          </div>
          <div className={styles.img}>
            <img src="./img/mainHeader.jpg" alt="" />
          </div>
        </section>

        <section className={styles.usersPages}>
          <div className={styles.img}>
            <img src="./img/mainHeader.jpg" alt="" />
          </div>
          <div className={styles.text}>
            <h2>Оптимизирован для совместного повествования</h2>
            <p>
              OwlBear основан на браузере и использует новейшие технологии,
              чтобы упростить процесс повествования. Присоединяйтесь к своей
              группе в Интернете и запускайте кампании, как вам нравится.
              OwlBear предлагает инструменты, оптимизированные для телефонов,
              планшетов и настольных устройств, установка не требуется.
            </p>

            <ImpLink to="/masterAdvPage" text="Изучите инструменты игрока" />
          </div>
        </section>
      </div>
    </div>
  );
};
