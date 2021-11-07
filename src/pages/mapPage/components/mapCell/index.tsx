import React, { Dispatch, SetStateAction } from "react";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
//slicers
import { selectCellSqureSize } from "../../../../app/mapSlice";
import {
  selectCellCurentCharacters,
  rmCharcter,
  addCharcter,
} from "../../../../app/currentCharactersSlice";
import styles from "./index.module.scss";

interface cell {
  id: string;
  currentCell: any;
  setCurrentCell: Dispatch<SetStateAction<any>>;
}

export const MapCell = ({ id, currentCell, setCurrentCell }: cell) => {
  const dispatch = useAppDispatch();

  const cellSquareSize = useAppSelector(selectCellSqureSize);
  let pc = "";
  let drag = false;
  let cursor = "grap";
  const character = useAppSelector(selectCellCurentCharacters(id));
  if (character) {
    pc = character.name;
    drag = true;
    cursor = "grab";
  }

  const dragStartHandler = (e: any) => {
    if (character) {
      setCurrentCell({ id: id, character: character });
    }
  };

  const dragEndHandler = (e: any) => {
    e.preventDefault();
  };
  const dragOvertHandler = (e: any) => {
    if (currentCell) {
      e.preventDefault();
      e.target.style.background = "rgba(0, 0, 0, 0.5)";
      setTimeout(() => {
        e.target.style.background = "rgba(0, 0, 0, 0.0)";
      }, 3000);
    }
  };
  const dropHandler = (e: any) => {
    if (currentCell) {
      e.preventDefault();
      dispatch(rmCharcter(currentCell.id));
      dispatch(addCharcter({ ...currentCell, id: id }));
      setCurrentCell(undefined);
    }
  };

  return (
    <div
      draggable={drag}
      onDragStart={(e) => dragStartHandler(e)}
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
