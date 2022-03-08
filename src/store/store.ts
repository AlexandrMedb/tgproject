import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import mapReducer from "features/mapSlice";
import currentCharactersReducer from "features/charaptersPositionsSlice";
import currentCharacterReducer from "features/curentCharapterSlice";
import userReducer from "features/userSlice";


export const store = configureStore({
  reducer: {
    user:userReducer,
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
