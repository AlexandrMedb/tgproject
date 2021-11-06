import React, { Dispatch, SetStateAction } from "react";
import styles from "./index.module.scss";

import { Cell } from "../../interfaces/cell";

interface ACell extends Cell {
  setCurrentCell?: Dispatch<SetStateAction<string>>;
  currenCell?: string;
}

export const MapCell = ({ size, npc, setCurrentCell, currenCell }: ACell) => {
  const dragStartHandler = (e: any) => {
    // setCurrentCell((currenCell) => currenCell + 1);
    // e.preventDefault();
    console.log(2);
  };

  const dragEndHandler = (e: any) => {
    e.preventDefault();
    // e.target.style.background = "none";
  };
  const dragOvertHandler = (e: any) => {
    e.preventDefault();

    e.target.style.background = "rgba(0, 0, 0, 0.5)";
  };
  const dropHandler = (e: any) => {
    e.preventDefault();
    console.log(e.target);
    // console.log(currenCell);
    e.target.style.background = "red";
  };

  let pc = "";
  if (npc) pc = npc.name;

  return (
    <div
      draggable={true}
      onDragStart={(e) => dragStartHandler(e)}
      onDragLeave={(e) => dragEndHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDragOver={(e) => dragOvertHandler(e)}
      onDrop={(e) => dropHandler(e)}
      className={styles.cell}
      style={{ width: `${size}px`, height: `${size}px`, color: "blue" }}
    >
      {pc}
    </div>
  );
};
