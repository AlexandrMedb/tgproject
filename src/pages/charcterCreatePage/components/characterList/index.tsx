import { useState } from "react";
// import { useParams } from "react-router-dom";
// import { useAppSelector, useAppDispatch } from "app/hooks";
// import { selectCurentCharacter } from "app/currentCharacterSlice";

import { characterInterface } from "interfaces/charactrInterface";

import styles from "./index.module.scss";
//components
import { CharHeaderDataChoise } from "./components/CharHeaderDataChoise";
import { CharExpInput } from "./components/charExpInput";
import { CharLvInput } from "./components/charLvInput";
import { CharStatInput } from "./components/charStatInput";
import { CharSavingThrowsSet } from "./components/charSavingThrowsSet";

import { defaltCharacter } from "data/defaultCharacter";
//inputsData
import {
  characterClasses,
  characterRaces,
  characterBackgrounds,
  characterAlignments,
} from "data/gameData";

export const CharacterList = () => {
  // const dispatch = useAppDispatch();
  // const char = useAppSelector(selectCurentCharacter);
  // const { chatId } = useParams<{ chatId: string }>();
  const [character, setCharacter] =
    useState<characterInterface>(defaltCharacter);

  return (
    <main className={styles.character}>
      <header className={styles.charHeader}>
        <div className={styles.charName}>
          <input
            type="text"
            value={character.name}
            onChange={(e) => {
              const target = e.target as HTMLInputElement;
              const value = { ...character };
              value.name = target.value;
              setCharacter(value);
            }}
          />
          <p>{character.name}</p>
        </div>
        <div className={styles.charHeaderRight}>
          <div className={styles.charClassAndLv}>
            <CharHeaderDataChoise
              character={character}
              setCharacter={setCharacter}
              data={characterClasses}
              datField="class"
            />
            <CharLvInput character={character} setCharacter={setCharacter} />
          </div>

          <CharHeaderDataChoise
            character={character}
            setCharacter={setCharacter}
            data={characterBackgrounds}
            datField="background"
          />
          <div className={styles.charData}>
            <input type="text" value={character.ownerName} disabled={true} />
            <p>Имя игрока{character.ownerName}</p>
          </div>
          <CharHeaderDataChoise
            character={character}
            setCharacter={setCharacter}
            data={characterRaces}
            datField="race"
          />
          <CharHeaderDataChoise
            character={character}
            setCharacter={setCharacter}
            data={characterAlignments}
            datField="alignment"
          />
          <CharExpInput character={character} setCharacter={setCharacter} />
        </div>
      </header>

      <main className={styles.characterMain}>
        <div className={styles.left}>
          <div className="stats">
            {Object.keys(character.stats).map((stat) => (
              <CharStatInput
                key={stat}
                stat={stat}
                character={character}
                setCharacter={setCharacter}
              />
            ))}
          </div>
          <div>
            <p>Вдохновение</p>
            <p>{`+${character.profinciency} бонус мастерства`}</p>
            <CharSavingThrowsSet
              stat={character.savingThrowModifiers}
              character={character}
              setCharacter={setCharacter}
            />
          </div>
        </div>
        <div className="center">dad</div>
        <div className="right">dsada</div>
      </main>
    </main>
  );
};
