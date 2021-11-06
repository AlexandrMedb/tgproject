import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface character {
  owner?: "gm" | string; //playerID
  characterId: string;
  name: string;
  stats?: {
    hp: number;
    speed: number;
  };
  loot?: {
    money?: number;
    weapon?: [string];
  };
}

export interface currentCharcters {
  [key: string]: character;
}

const initialState: currentCharcters = {};

export const currentCharctersSlice = createSlice({
  name: "currentCharcters",
  initialState,
  reducers: {
    addCharcter: (state, action: PayloadAction<character>) => {
      state[action.payload.characterId] = action.payload;
    },
  },
});

export const { addCharcter } = currentCharctersSlice.actions;

export const selectAllCurentCharacters = (state: RootState) =>
  state.currentCharacters;

export default currentCharctersSlice.reducer;
