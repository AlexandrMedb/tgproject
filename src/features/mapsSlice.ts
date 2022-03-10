import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {mapInterface} from 'interfaces/mapInterface'

const initialState: Array <mapInterface> =[];

export const mapsSlice = createSlice({
    name: 'maps',
    initialState,
    reducers: {
        setMaps: (state, action: PayloadAction <Array <mapInterface>>) => {
           state.push(...action.payload);
        },
    },
});

export const {
    setMaps,
} = mapsSlice.actions;



export default mapsSlice.reducer;
