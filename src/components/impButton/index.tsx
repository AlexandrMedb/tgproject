import React from "react";

import styles from "./index.module.scss";

export interface button {
  text: string;
  event?(): void;
  type?: "submit" | "button" | "reset";
}

export const ImpButton = ({ text, event, type = "submit" }: button) => {
  return (
    <div className={styles.impButton}>
      <button type={type}>{text}</button>
    </div>
  );
};
