import React from "react";

import styles from "./index.module.scss";

export interface button {
  text: string;
  event(): void;
}

export const ImpButton = ({ text, event }: button) => {
  return (
    <div className={styles.impButton}>
      <button type="button" onClick={() => event()}>
        {text}
      </button>
    </div>
  );
};
