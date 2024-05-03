import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice'
import actionSlice from './actionSlice';
import productReducer from "./productSlice"

export const store = configureStore({
    reducer:{
        user:userReducer,
        action:actionSlice,
        product:productReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch