import { configureStore } from "@reduxjs/toolkit";
import ShowPopupReducer from "./ShowPopUpSlice/ShowPopUpSlice";

export const store = configureStore({
    reducer: {
        ShowPopup: ShowPopupReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;