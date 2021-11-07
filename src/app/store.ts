import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import mapReducer from "./mapSlice";
import currentCharactersReducer from "./currentCharactersSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    map: mapReducer,
    currentCharacters: currentCharactersReducer,
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
