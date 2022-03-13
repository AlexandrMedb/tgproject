import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {mapInterface} from 'interfaces/mapInterface';
import {AppThunk} from '../store/store';
import {MAP} from '../const/reqURL';
import {TOKEN} from '../const/localStorageKeys';


export const readMaps = createAsyncThunk(
    'map/fetchMap',
    async () => {
      const response = await fetch(MAP, {
        headers: {Authorization: `Bearer ${localStorage.getItem(TOKEN)}`}});
      const data:Array<mapInterface> = await response.json();
      return data;
      // The value we return becomes the `fulfilled` action payload
    },
);


const initialState: Array <mapInterface> =[];

export const mapsSlice = createSlice({
  name: 'maps',
  initialState,
  reducers: {
    setMaps: (state, action: PayloadAction <Array <mapInterface>>) => {
      state=action.payload;
      return state;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(readMaps.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },

});

export const {
  setMaps,
} = mapsSlice.actions;


export const receiveMaps = (data: Array<mapInterface>): AppThunk => (
    dispatch,
) => {
  console.log(data);
  dispatch(setMaps(data));
};

export default mapsSlice.reducer;
