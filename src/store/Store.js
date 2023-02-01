import { configureStore } from "@reduxjs/toolkit";
import {MoviesApi} from "../services/MovieServices"


export const store = configureStore({
    reducer: {
        [MoviesApi.reducerPath]: MoviesApi.reducer,
     
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(MoviesApi.middleware),
})