import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectCurentCharacter } from "../../app/currentCharacterSlice";

import { CharacterList } from "./components/characterList.tsx";

import { characterInterface } from "../../interfaces/charactrInterface";

import styles from "./index.module.scss";

import {
  getDatabase,
  ref,
  update,
  set,
  get,
  push,
  onValue,
} from "firebase/database";
export const CharacterCreatePage = () => {
  const dispatch = useAppDispatch();

  const char = useAppSelector(selectCurentCharacter);
  console.log(char);
  if (char) console.log("dsa");

  const [characterList, setCharacterList] = useState({});
  const [currentCharacter, setCurrentCharacter] = useState("");

  const [character, setCharacter] = useState({
    owner: "gm",
    characterId: "13ads",
    name: "vas",
    class: "Paladin",
    race: "Elf",
    background: "Spy",
    alignment: "True neutral",
    experiencePoints: 0,
    lv: 1,
    profinciency: 2,
    hitPoints: 10,
    speed: 30,

    stats: {
      strength: 0,
      dexteruty: 0,
      constitusion: 0,
      itellegence: 0,
      wisdom: 0,
      charisma: 0,
    },
    skils: {
      acrobatics: {
        isSet: false,
        depence: "dexteruty",
      },
      animalHandling: {
        isSet: false,
        depence: "wisdom",
      },
      arcana: {
        isSet: false,
        depence: "itellegence",
      },
      athletics: {
        isSet: false,
        depence: "strength",
      },
      deception: {
        isSet: false,
        depence: "charisma",
      },
      history: {
        isSet: false,
        depence: "itellegence",
      },
      insight: {
        isSet: false,
        depence: "wisdom",
      },
      intimidation: {
        isSet: false,
        depence: "charisma",
      },
      investigation: {
        isSet: false,
        depence: "itellegence",
      },
      medicine: {
        isSet: false,
        depence: "wisdom",
      },
      nature: {
        isSet: false,
        depence: "itellegence",
      },
      perception: {
        isSet: false,
        depence: "wisdom",
      },
      performance: {
        isSet: false,
        depence: "charisma",
      },
      persuasion: {
        isSet: false,
        depence: "charisma",
      },
      religion: {
        isSet: false,
        depence: "itellegence",
      },
      sleightOfHand: {
        isSet: false,
        depence: "dexteruty",
      },
      Stealth: {
        isSet: false,
        depence: "dexteruty",
      },
      survival: {
        isSet: false,
        depence: "wisdom",
      },
    },
    savingThrowModifiers: {
      strength: false,
      dexteruty: false,
      constitusion: false,
      itellegence: false,
      wisdom: false,
      charisma: false,
    },
  });

  const db = getDatabase();

  const { chatId } = useParams<{ chatId?: string }>();

  let data = {};
  const starCountRef = ref(db, `profile/${chatId}/characters`);
  onValue(starCountRef, (snapshot) => {
    if (snapshot.val()) {
      data = snapshot.val();
      let newKeys = Object.keys(data);
      let currentKeys = Object.keys(characterList);
      if (newKeys.length !== currentKeys.length) {
        setCharacterList(data);
      }
    }
  });

  return (
    <main className={styles.wrapper}>
      <div className={styles.left}>
        <input type="text" />

        <div>
          <h3>Мои персонажи</h3>
          {/* {Object.keys(characterList).map((characterId) => (
            <div
              onClick={() => {
                setCurrentCharacter(characterId);
              }}
              key={characterId}
            >
              {characterList[characterId].username}
            </div>
          ))} */}
        </div>
      </div>
      <section className={styles.character}>
        <CharacterList />
        <div className={styles.characterHeader}></div>

        <div>
          {/* <h1>{currentCharacter ? currentCharacter : "Выбеи персонажа"}</h1> */}
          {/* <form action="">
            {Object.keys(character.stats).map((stat) => (
              <div key={stat}>
                <p>{`${stat}=${character.stats[stat]}`}</p>{" "}
                <input
                  onChange={(e) => {
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
                    result.stats[stat] = value;
                    setCharacter(result);
                  }}
                  type="number"
                />
              </div>
            ))}
          </form>
        </div>
        <div>
          {Object.keys(character.skils).map((skil) => (
            <div key={skil}>
              <p>{`${skil}=${
                character.stats[character.skils[skil].depence] +
                2 * character.skils[skil].isSet
              }`}</p>
              <input
                type="checkbox"
                checked={character.skils[skil].isSet}
                onChange={(e) => {
                  let result = { ...character };
                  result.skils[skil].isSet = !result.skils[skil].isSet;
                  setCharacter(result);
                }}
              />
            </div>
          ))} */}
        </div>
      </section>
    </main>
  );
};
