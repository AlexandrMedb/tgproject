import React from "react";
import styles from "./index.module.scss";

import { useAppDispatch } from "../../../../app/hooks";
//slicer
import {
  setMapWidthPX,
  setCellSqureSize,
  setHeightInCels,
  setWidthInCels,
  setMap,
} from "../../../../app/mapSlice";
import {mapSizeCounter} from 'utils/mapSizeCounter/mapSizeCouner'

export const MapMenu = () => {
  const dispatch = useAppDispatch();
  console.log(mapSizeCounter());



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
          onChange={(e) => dispatch(setWidthInCels(+e.target.value))}
          name="mapLink"
          type="number"
        />
      </div>
      <div>
        <p>Высота карты в клетках</p>
        <input
          onChange={(e) => dispatch(setHeightInCels(+e.target.value))}
          name="mapLink"
          type="number"
        />
      </div>
      <div>
        <p>Размер клетки в PX</p>
        <input
          onChange={(e) => dispatch(setCellSqureSize(+e.target.value))}
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
