import React, { useState, useCallback } from "react";
import styles from "./index.module.scss";
//components
import { MapField } from "./components/mapField";
import { MapMenu } from "./components/mapMenu/mapCell";

import { Cell } from "./interfaces/cell";

export const MapPage = () => {
  const [cellSize, setCellSize] = useState(34);
  const [cellWidth, setCellWidth] = useState(30);
  const [cellHeight, setCellHeight] = useState(24);
  const [mapLink, setMapLink] = useState(
    "https://i.pinimg.com/736x/d0/13/2b/d0132bcbaedd18bedafd82a861a4668a.jpg"
  );
  const [mapSize, setMapSize] = useState(1020);

  const CreateMapArray = useCallback(() => {
    let res = new Array(cellHeight).fill([]);
    let cell: Cell = {
      size: cellSize,
    };
    res = res.map((el) => new Array(cellWidth).fill(cell));
    res[0][0] = {
      size: cellSize,
      npc: {
        name: "gnol",
      },
    };
    return res;
  }, [cellHeight, cellWidth, cellSize]);

  const [mapArray, setMapArray] = useState(CreateMapArray());

  return (
    <main className={styles.wrapper}>
      <section className="gameMenu">
        <MapMenu
          setCellSize={setCellSize}
          setCellWidth={setCellWidth}
          setCellHeight={setCellHeight}
          setMapLink={setMapLink}
          setMapSize={setMapSize}
        />
      </section>

      <section className="gameField">
        <MapField
          cellSize={cellSize}
          mapLink={mapLink}
          cellWidth={cellWidth}
          mapSize={mapSize}
          mapArray={mapArray}
        />
      </section>

      <section className="chat">chat</section>
    </main>
  );
};
