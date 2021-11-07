import React from "react";
import styles from "./index.module.scss";
//components
import { MapField } from "./components/mapField";
import { MapMenu } from "./components/mapMenu/mapCell";

export const MapPage = () => {
  return (
    <main className={styles.wrapper}>
      <section className="gameMenu">
        <MapMenu />
      </section>

      <section className="gameField">
        <MapField />
      </section>

      <section className="chat">chat</section>
    </main>
  );
};
