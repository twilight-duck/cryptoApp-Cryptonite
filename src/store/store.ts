import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../urls/cryptoApi";
import { cryptoNewsApi } from "../urls/cryptoNewsApi";

export const store = configureStore({
    reducer:{
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware, cryptoNewsApi.middleware),
    
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch