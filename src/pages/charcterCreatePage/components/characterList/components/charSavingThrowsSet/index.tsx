import React, {Dispatch, SetStateAction} from 'react';
// import styles from "./mapPage.module.scss";

import {characterInterface} from 'interfaces/charactrInterface';
import {statNameType} from 'interfaces/charactrInterface/types/otherTypes';

interface charSavingThrowsSetInterface {
  character: characterInterface;
  setCharacter: Dispatch<SetStateAction<characterInterface>>;
  stat: {
    [key: string]: boolean;
  };
}

export const CharSavingThrowsSet = ({
  stat,
  character,
  setCharacter,
}: charSavingThrowsSetInterface) => {
  return (
    <div>
      {Object.keys(stat).map((e) => {
        const getKeyValue = e as statNameType;
        const multiplier = character.savingThrowModifiers[getKeyValue] ? 1 : 0;
        return (
          <div key={getKeyValue}>
            <input
              type="checkbox"
              checked={stat[e]}
              onChange={() => {
                const result = {...character};
                result.savingThrowModifiers[getKeyValue] =
                  !result.savingThrowModifiers[getKeyValue];
                setCharacter(result);
              }}
            />
            <span>
              {` ${character.stats[getKeyValue] + 2 * multiplier}
              `}
            </span>
            {e}
          </div>
        );
      })}
      <p>Спасброски</p>
    </div>
  );
};
