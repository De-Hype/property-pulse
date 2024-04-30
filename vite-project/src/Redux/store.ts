import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice'
import actionSlice from './actionSlice';

export const store = configureStore({
    reducer:{
        user:userReducer,
        action:actionSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch