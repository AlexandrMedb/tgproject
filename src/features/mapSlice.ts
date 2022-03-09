import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {mapInterface} from 'interfaces/mapInterface'

const initialState: mapInterface = {
  mapLink: "./img/testMap.jpg",
  mapWidthPx: 1020,
  cellSquareSize: 34,
  widthInCells: 30,
  heightInCells: 24,
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setMap: (state, action: PayloadAction<string>) => {
      state.mapLink = action.payload;
    },
    setMapWidthPX: (state, action: PayloadAction<number>) => {
      const newData = action.payload;
      if (newData > 100) {
        state.mapWidthPx = Math.floor(newData);
      }
    },
    setCellSquareSize: (state, action: PayloadAction<number>) => {

      state.cellSquareSize = Math.floor(action.payload);
    },
    setWidthInCells: (state, action: PayloadAction<number>) => {
      const newData = action.payload;
      if (newData > 1) {
        state.widthInCells = Math.floor(newData);
      }
    },
    setHeightInCells: (state, action: PayloadAction<number>) => {
      const newData = action.payload;
      if (newData > 1) {
        state.heightInCells = Math.floor(newData);
      }
    },
  },
});

export const {
  setMap,
  setMapWidthPX,
  setCellSquareSize,
  setWidthInCells,
  setHeightInCells,
} = mapSlice.actions;



export default mapSlice.reducer;
