import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice.ts";

;

export const rootReducer = combineReducers({
    user: userSlice
})

export const store = configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
    }
)


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch