import React, { useState, useCallback } from "react";
import { useAppSelector } from "../../../../app/hooks";
//slicers
import {
  selectMaplink,
  selectMapWidthPx,
  selectWidthInCels,
  selectHeightInCels,
} from "../../../../app/mapSlice";

//components
import { MapCell } from "../mapCell";
import { Cell } from "../../interfaces/cell";
import styles from "./index.module.scss";

export const MapField = () => {
  const [currenCell, setCurrentCell] = useState();

  //map
  const mapBackground = useAppSelector(selectMaplink);
  const mapBackgroundWidth = useAppSelector(selectMapWidthPx);

  const cellWidth = useAppSelector(selectWidthInCels);
  const cellHeight = useAppSelector(selectHeightInCels);
  //chareacters

  const CreateMapArray = useCallback(() => {
    let res = new Array(cellHeight).fill([]);
    let cell: Cell = {
      size: 0,
    };
    res = res.map((el) => new Array(cellWidth).fill(cell));

    return res;
  }, [cellHeight, cellWidth]);

  const mapArray = CreateMapArray();

  return (
    <section className={styles.mapWrapper}>
      <div>
        <img
          style={{ width: `${mapBackgroundWidth}px` }}
          src={mapBackground}
          alt="map"
        />
      </div>

      <div
        className={styles.mapField}
        style={{ gridTemplateColumns: `repeat(${cellWidth}, 1fr)` }}
      >
        {mapArray.map((el, i) =>
          el.map((el: any, j: number) => {
            return (
              <MapCell
                key={`id${i}_${j}`}
                id={`id${i}_${j}`}
                currentCell={currenCell}
                setCurrentCell={setCurrentCell}
              />
            );
          })
        )}
      </div>
    </section>
  );
};
