import { Dispatch, SetStateAction, ChangeEvent } from "react";
import styles from "./index.module.scss";

import { experiencePointsLv } from "data/ruleLvData";
import { characterInterface } from "interfaces/charactrInterface";

interface CharLvInputInterface {
  character: characterInterface;
  setCharacter: Dispatch<SetStateAction<characterInterface>>;
}

export const CharExpInput = ({
  character,
  setCharacter,
}: CharLvInputInterface) => {
  const expChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let currentEx = +e.target.value;
    if (isNaN(currentEx)) currentEx = 0;

    const newLv =
      experiencePointsLv.findIndex((el, i, arr) => {
        if (currentEx >= el && currentEx < arr[i + 1]) return true;
        if (i === arr.length - 1) return true;
        return false;
      }) + 1;

    let newProfinciency = Math.floor(newLv / 4) + 2;
    if (newLv % 4 === 0) newProfinciency -= 1;
    const value = { ...character };
    value.experiencePoints = currentEx;
    value.lv = newLv;
    value.profinciency = newProfinciency;
    setCharacter(value);
  };

  return (
    <div className={styles.charData}>
      <input
        type="text"
        value={character.experiencePoints}
        onChange={(e) => expChangeHandler(e)}
      />
      <p>experiencePoints {character.experiencePoints}</p>
    </div>
  );
};
