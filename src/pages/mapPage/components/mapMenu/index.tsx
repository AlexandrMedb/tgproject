import React from "react";
import styles from "./index.module.scss";

import { useAppDispatch } from "store/hooks";
//slicer
import {
    setMap,
    setMapWidthPX,
    setCellSquareSize,
    setWidthInCells,
    setHeightInCells,
} from "features/mapSlice";


export const MapMenu = () => {
  const dispatch = useAppDispatch();




  return (
    <div     className={styles.form} >
      <div>
        <p>Ссылка на карту</p>
         <input
          onChange={(e) => {
            dispatch(setMap(e.target.value));
          }}
          name="mapLink"
          type="text"
        />
      </div>
      <div>
        <p>Размер карты в px</p>
        <input
          onChange={(e) => dispatch(setMapWidthPX(+e.target.value))}
          name="mapLink"
          type="number"
        />
      </div>
      <div>
        <p>ширина карты в клетках</p>
        <input
          onChange={(e) => dispatch(setWidthInCells(+e.target.value))}
          name="mapLink"
          type="number"
        />
      </div>
      <div>
        <p>Высота карты в клетках</p>
        <input
          onChange={(e) => dispatch(setHeightInCells(+e.target.value))}
          name="mapLink"
          type="number"
        />
      </div>
      <div>
        <p>Размер клетки в PX</p>
        <input
          onChange={(e) => dispatch(setCellSquareSize(+e.target.value))}
          name="mapLink"
          type="number"
        />
      </div>
      <button type="button" >
        Сохранить
      </button>
    </div>
  );
};
