import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authAPI";
import { pokemonApi } from "./services/pokemonAPI";
import { userSlice } from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
        user: userSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        })
            .concat(authApi.middleware)
            .concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
