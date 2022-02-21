import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/store";

export interface character {
  owner?: "gm" | string; //playerID
  characterId: string;
  name: string;
  stats?: {
    hp?: number;
    speed: number;
  };
  loot?: {
    money?: number;
    weapon?: [string];
  };
}

export interface characterDis {
  id: string;
  character: character;
}

export interface currentCharcters {
  [key: string]: character;
}

const initialState: currentCharcters = {
  id0_0: {
    characterId: "1a",
    name: "gnol",
  },
  id1_0: {
    characterId: "1a",
    name: "elf",
  },
  id5_5: {
    characterId: "1a",
    name: "gnom",
  },
  id23_3: {
    characterId: "1a",
    name: "solder",
  },
};

export const charaptersPositionsSlice = createSlice({
  name: "currentCharcters",
  initialState,
  reducers: {
    addCharcter: (state, action: PayloadAction<characterDis>) => {
      state[action.payload.id] = action.payload.character;
    },
    rmCharcter: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
  },
});

export const { addCharcter, rmCharcter } = charaptersPositionsSlice.actions;

export const selectAllCurentCharacters = (state: RootState) =>
  state.currentCharacters;

export const selectCellCurentCharacters =
  (position: string) => (state: RootState) =>
    state.currentCharacters[position];

export default charaptersPositionsSlice.reducer;
