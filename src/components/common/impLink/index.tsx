import React from "react";
import { Link } from "react-router-dom";

import styles from "./index.module.scss";

export interface link {
  text: string;
  to: string;
}

export const ImpLink = ({ text, to }: link) => {
  return (
    <Link className={styles.impLink} to={to}>
      {text}
    </Link>
  );
};
