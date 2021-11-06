import React from "react";
import styles from "./index.module.scss";

import { Dispatch, SetStateAction } from "react";

interface mapSetData {
  setCellSize: Dispatch<SetStateAction<number>>;
  setCellWidth: Dispatch<SetStateAction<number>>;
  setCellHeight: Dispatch<SetStateAction<number>>;
  setMapLink: Dispatch<SetStateAction<string>>;
  setMapSize: Dispatch<SetStateAction<number>>;
}

export const MapMenu = ({
  setCellSize,
  setCellWidth,
  setCellHeight,
  setMapLink,
  setMapSize,
}: mapSetData) => {
  const handleClick = (e: any) => {
    console.dir(e.target.parentNode);
  };

  return (
    <form className={styles.form} action="">
      <div>
        <p>Ссылка на карту</p>
        <input
          onChange={(e) => {
            setMapLink(e.target.value);
          }}
          name="mapLink"
          type="text"
        />
      </div>
      <div>
        <p>Размер карты в px</p>
        <input
          onChange={(e) => {
            setMapSize(+e.target.value);
          }}
          name="mapLink"
          type="number"
        />
      </div>
      <div>
        <p>ширина карты в клетках</p>
        <input
          onChange={(e) => {
            let res = Math.floor(+e.target.value);

            if (res < 1) {
              setCellWidth(1);
            } else {
              setCellWidth(res);
            }
          }}
          name="mapLink"
          type="number"
        />
      </div>
      <div>
        <p>Высота карты в клетках</p>
        <input
          onChange={(e) => {
            setCellHeight(+e.target.value);
          }}
          name="mapLink"
          type="number"
        />
      </div>
      <div>
        <p>Размер клетки в PX</p>
        <input
          onChange={(e) => {
            let res = +e.target.value;
            if (res < 1) {
              setCellSize(1);
            } else {
              setCellSize(res);
            }
          }}
          name="mapLink"
          type="number"
        />
      </div>
      <button type="button" onClick={(e) => handleClick(e)}>
        Сохранить
      </button>
    </form>
  );
};
