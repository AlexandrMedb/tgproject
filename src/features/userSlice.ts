import {createSlice, PayloadAction } from "@reduxjs/toolkit";
import {userInterface} from "../interfaces/userInterfaces";
import { AppThunk } from 'store/store';
import {TOKEN, USERID} from "../const/localStorageKeys";



const initialState: userInterface = {
    userId: localStorage.getItem(USERID) || "",
    token: localStorage.getItem(TOKEN) || "",
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<userInterface>) => {
            state.userId = action.payload.token;
            state.token = action.payload.userId;
        },
    },
});


export const {
    setUserData,
} = userSlice.actions;


export const setUser = (data: userInterface): AppThunk => (
    dispatch,
    getState
) => {
    localStorage.setItem(TOKEN, data?.token)
    dispatch(setUserData(data));
};




export default userSlice.reducer;
