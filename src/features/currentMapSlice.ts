import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {mapInterface} from 'interfaces/mapInterface';

const initialState: mapInterface ={
  mapName: '',
};

export const currentMapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setMap: (state, action: PayloadAction<mapInterface>) => {
      state = action.payload;
      return state;
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
} = currentMapSlice.actions;


export default currentMapSlice.reducer;
