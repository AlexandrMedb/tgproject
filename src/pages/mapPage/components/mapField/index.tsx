import React, { useState } from "react";
import { MapCell } from "../mapCell";
import styles from "./index.module.scss";

import { Cell } from "../../interfaces/cell";

interface mapData {
  cellSize: number;
  cellWidth: number;
  cellHeight?: number;
  mapLink: string;
  mapSize: number;
  mapArray: Array<Array<Cell>>;
}

export const MapField = ({
  cellSize,
  cellWidth,
  mapLink,
  mapSize,
  mapArray,
}: mapData) => {
  const [currenCell, setCurrentCell] = useState("");

  return (
    <section className={styles.mapWrapper}>
      <div>
        <img style={{ width: `${mapSize}px` }} src={mapLink} alt="map" />
      </div>

      <div
        className={styles.mapField}
        style={{ gridTemplateColumns: `repeat(${cellWidth}, 1fr)` }}
      >
        {mapArray.map((el, i) =>
          el.map((el, j) => {
            return (
              <MapCell
                key={`${i}_${j}`}
                size={el.size}
                npc={el.npc}
                setCurrentCell={setCurrentCell}
                currenCell={currenCell}
              />
            );
          })
        )}
      </div>
    </section>
  );
};
