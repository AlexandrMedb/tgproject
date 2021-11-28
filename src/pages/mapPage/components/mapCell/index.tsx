import React, { Dispatch, SetStateAction } from "react";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
//slicers
import { selectCellSqureSize } from "../../../../app/mapSlice";
import {
  selectCellCurentCharacters,
  rmCharcter,
  addCharcter,
} from "../../../../app/mapCurrentCharactersSlice";
import styles from "./index.module.scss";

interface cell {
  id: string;
  currentCell: any;
  setCurrentCell: Dispatch<SetStateAction<any>>;
  wayLength: number;
  setWayLength: Dispatch<SetStateAction<number>>;
}

export const MapCell = ({
  id,
  currentCell,
  setCurrentCell,
  wayLength,
  setWayLength,
}: cell) => {
  const dispatch = useAppDispatch();

  const cellSquareSize = useAppSelector(selectCellSqureSize);
  let pc = "";
  let drag = false;
  let cursor = "grap";
  let cellCost = 5; //ft
  const character = useAppSelector(selectCellCurentCharacters(id));
  if (character) {
    pc = character.name;
    drag = true;
    cursor = "grab";
  }

  const dragStartHandler = (e: any) => {
    if (character) {
      setCurrentCell({ id: id, character: character });
      setWayLength(0);
    }
  };

  const dragEnterHandler = (e: any) => {
    if (currentCell) {
      e.target.style.background = "rgba(0, 0, 0, 0.5)";
    }
  };

  const dragEndHandler = (e: any) => {
    e.preventDefault();
    if (currentCell) {
      if (character && id !== currentCell.id) cellCost *= 2;
      setWayLength(wayLength + cellCost);
    }

    setTimeout(() => {
      e.target.style.background = "rgba(0, 0, 0, 0.0)";
    }, 3000);
  };
  const dragOvertHandler = (e: any) => {
    e.preventDefault();
    // if (currentCell) {
    //   e.target.style.background = "rgba(0, 0, 0, 0.5)";
    // }
  };
  const dropHandler = (e: any) => {
    e.preventDefault();
    setWayLength(0);
    if (!character) {
      if (currentCell) {
        dispatch(rmCharcter(currentCell.id));
        dispatch(addCharcter({ ...currentCell, id: id }));
        setCurrentCell(undefined);
      }
    }
    e.target.style.background = "rgba(0, 0, 0, 0.0)";
  };

  return (
    <div
      draggable={drag}
      onDragStart={(e) => dragStartHandler(e)}
      onDragEnter={(e) => dragEnterHandler(e)}
      onDragLeave={(e) => dragEndHandler(e)}
      onDragEnd={(e) => dragEndHandler(e)}
      onDragOver={(e) => dragOvertHandler(e)}
      onDrop={(e) => dropHandler(e)}
      className={styles.cell}
      style={{
        cursor: cursor,
        width: `${cellSquareSize}px`,
        height: `${cellSquareSize}px`,
        color: "blue",
      }}
    >
      {pc}
    </div>
  );
};
