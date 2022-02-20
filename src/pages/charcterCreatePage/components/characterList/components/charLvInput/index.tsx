import { Dispatch, SetStateAction, ChangeEvent } from "react";
import styles from "./index.module.scss";

import { experiencePointsLv } from "data/ruleLvData";
import { characterInterface } from "interfaces/charactrInterface";

interface CharLvInputInterface {
  character: characterInterface;
  setCharacter: Dispatch<SetStateAction<characterInterface>>;
}

export const CharLvInput = ({
  character,
  setCharacter,
}: CharLvInputInterface) => {
  const lvChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    let currentLv = +e.target.value;
    const newExperiencePoints = experiencePointsLv[currentLv - 1];

    let newProfinciency = Math.floor(currentLv / 4) + 2;
    if (currentLv % 4 === 0) newProfinciency -= 1;

    const value = { ...character };
    value.lv = currentLv;
    value.profinciency = newProfinciency;
    value.experiencePoints = newExperiencePoints;

    setCharacter(value);
  };

  return (
    <div className={styles.charData}>
      <select
        onChange={(e) => {
          lvChangeHandler(e);
        }}
        value={character.lv}
      >
        {experiencePointsLv.map((e, i) => (
          <option key={i}>{i + 1}</option>
        ))}
      </select>
      <p>{`LVel ${character.lv}`}</p>
    </div>
  );
};
