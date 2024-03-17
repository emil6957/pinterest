import { configureStore } from "@reduxjs/toolkit";
import ShowPopupReducer from "./ShowPopUpSlice/ShowPopUpSlice";
import isSigningUpReducer from "./isSigningUp/isSigningUpSlice";

export const store = configureStore({
    reducer: {
        ShowPopup: ShowPopupReducer,
        isSigningUp: isSigningUpReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;