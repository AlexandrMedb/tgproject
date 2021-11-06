import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface mapState {
  maplink: string;
  mapWidthPx: number;
  maHeightPx?: number;
}

const initialState: mapState = {
  maplink: "./img/testMap.jpg",
  mapWidthPx: 1020,
};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setMap: (state, action: PayloadAction<string>) => {
      state.maplink = action.payload;
    },
    setMapWidthPX: (state, action: PayloadAction<number>) => {
      let newData = action.payload;
      if (newData > 100) {
        state.mapWidthPx = Math.floor(newData);
      }
    },
  },
});

export const { setMap, setMapWidthPX } = mapSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectMapWidthPx = (state: RootState) => state.map.mapWidthPx;
export const selectMaplink = (state: RootState) => state.map.maplink;

export default mapSlice.reducer;
