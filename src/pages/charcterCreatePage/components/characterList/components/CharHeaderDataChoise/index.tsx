import React from 'react';

import styles from './index.module.scss';

export const CharHeaderDataChoise = ({
  character,
  setCharacter,
  data,
  datField}:any) => {
  return (
    <div className={styles.charData}>
      <select
        onChange={(e) => {
          const value = {...character};
          value[datField] = e.target.value;
          setCharacter(value);
        }}
        value={character[datField]}
      >
        {data.map((e:any) => (
          <option key={e}>{e}</option>
        ))}
      </select>
      <p>{`${datField} ${character[datField]}`}</p>
    </div>
  );
};
