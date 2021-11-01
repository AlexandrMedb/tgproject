import React from "react";

import styles from "./index.module.scss";

export interface inputProps {
  title?: string;
  type: string;
}

export const InputFiled = ({ title, type }: inputProps) => {
  return (
    <div className={styles.inputFiled}>
      <h3>{title}</h3>
      <input name="username" type={type} />
    </div>
  );
};
