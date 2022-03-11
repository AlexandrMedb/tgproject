import React from 'react';

import styles from './index.module.scss';

export interface button {
  text: string;
  onClick?(): void;
  type?: 'submit' | 'button' | 'reset';
}

export const ImpButton = ({text, onClick, type = 'submit'}: button) => {
  return (
    <div className={styles.impButton}>
      <button onClick={onClick } type={type}>{text}</button>
    </div>
  );
};
