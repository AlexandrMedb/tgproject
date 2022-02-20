import { Dispatch, SetStateAction, ChangeEvent } from "react";
// import styles from "./index.module.scss";

import { characterInterface } from "interfaces/charactrInterface";
import { statNameType } from "interfaces/charactrInterface/types/otherTypes";

interface CharStatInputInterface {
  stat: string;
  character: characterInterface;
  setCharacter: Dispatch<SetStateAction<characterInterface>>;
}

export const CharStatInput = ({
  stat,
  character,
  setCharacter,
}: CharStatInputInterface) => {
  const getKeyValue = stat as statNameType;

  const statChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let value = Math.round(+e.target.value);
    if (value < 0) {
      value = 0;
      e.target.value = "0";
    }
    if (value > 20) {
      value = 20;
      e.target.value = "20";
    }
    value = Math.floor((value - 10) / 2);

    let result: characterInterface = { ...character };
    result.stats[getKeyValue] = value;
    setCharacter(result);
  };

  return (
    <div>
      <p>{stat}</p>
      <p>
        {character.stats[getKeyValue] > 0
          ? `+${character.stats[getKeyValue]}`
          : character.stats[getKeyValue]}
      </p>
      <input type="number" onChange={(e) => statChangeHandler(e)} />
    </div>
  );
};
