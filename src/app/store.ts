import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import mapReducer from "./mapSlice";
import currentCharactersReducer from "./mapCurrentCharactersSlice";
import currentCharacterReducer from "./currentCharacterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    map: mapReducer,
    currentCharacters: currentCharactersReducer,
    currentCharacter: currentCharacterReducer,
  },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
