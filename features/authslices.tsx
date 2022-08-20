import { createSlice } from "@reduxjs/toolkit";

export const authStateChanged = createSlice({
    name: 'authStateChanged',
    initialState: {
        isLoggedIn: false,
    },
    reducers: {
        login(state){
            state.isLoggedIn = true;
        },
        logout(state){
            state.isLoggedIn = false;
        }
    }
})

export const { actions } = authStateChanged;
export const { login, logout } = actions;