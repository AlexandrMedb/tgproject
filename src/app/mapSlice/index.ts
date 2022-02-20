import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface mapState {
  maplink: string;
  mapWidthPx: number;
  maHeightPx?: number;
  cellsqureSize: number;
  widthInCels: number;
  heightInCels: number;
}

const initialState: mapState = {
  maplink: "./img/testMap.jpg",
  mapWidthPx: 1020,
  cellsqureSize: 34,
  widthInCels: 30,
  heightInCels: 24,
};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setMap: (state, action: PayloadAction<string>) => {
      state.maplink = action.payload;
    },
    setMapWidthPX: (state, action: PayloadAction<number>) => {
      const newData = action.payload;
      if (newData > 100) {
        state.mapWidthPx = Math.floor(newData);
      }
    },
    setCellSqureSize: (state, action: PayloadAction<number>) => {
      const newData = action.payload;
      if (newData > 10) {
        state.cellsqureSize = Math.floor(newData);
      }
    },
    setWidthInCels: (state, action: PayloadAction<number>) => {
      const newData = action.payload;
      if (newData > 1) {
        state.widthInCels = Math.floor(newData);
      }
    },
    setHeightInCels: (state, action: PayloadAction<number>) => {
      const newData = action.payload;
      if (newData > 1) {
        state.heightInCels = Math.floor(newData);
      }
    },
  },
});

export const {
  setMap,
  setMapWidthPX,
  setCellSqureSize,
  setHeightInCels,
  setWidthInCels,
} = mapSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectMapWidthPx = (state: RootState) => state.map.mapWidthPx;
export const selectMaplink = (state: RootState) => state.map.maplink;
export const selectCellSqureSize = (state: RootState) =>
  state.map.cellsqureSize;
export const selectWidthInCels = (state: RootState) => state.map.widthInCels;
export const selectHeightInCels = (state: RootState) => state.map.heightInCels;

export default mapSlice.reducer;
