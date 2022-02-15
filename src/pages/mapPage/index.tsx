import React from "react";
import styles from "./index.module.scss";
//components
import { MapField } from "./components/mapField";
import { MapMenu } from "./components/mapMenu";

export const MapPage = () => {
  return (
    <main className={styles.wrapper}>
      <section>
        <MapMenu />
      </section>

      <section >
        <MapField />
      </section>

      {/*<section>chat</section>*/}
    </main>
  );
};
