import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import currentMapReducer from 'features/currentMapSlice';
import currentCharactersReducer from 'features/charaptersPositionsSlice';
import currentCharacterReducer from 'features/curentCharapterSlice';
import userReducer from 'features/userSlice';
import mapsReducer from 'features/mapsSlice';


export const store = configureStore({
  reducer: {
    user: userReducer,
    currentMap: currentMapReducer,
    maps: mapsReducer,
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
