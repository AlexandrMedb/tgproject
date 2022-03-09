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
            state.userId = action.payload.userId;
            state.token = action.payload.token;
        },
    },
});


export const {
    setUserData,
} = userSlice.actions;


export const login = (data: userInterface): AppThunk => (
    dispatch,
) => {
    localStorage.setItem(TOKEN, data?.token)
    dispatch(setUserData(data));
};

export const logout = (): AppThunk => (
    dispatch,
    getState
) => {
    localStorage.removeItem(TOKEN)
    dispatch(setUserData({token:'' ,userId: ''}));
};


export default userSlice.reducer;
