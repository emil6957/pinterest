import { createSlice } from "@reduxjs/toolkit";

type ShowPopUpState = {
    value: Boolean;
}

const initialState: ShowPopUpState = {
    value: false,
};

const showPopUpSlice = createSlice({
    name: "showPopUp",
    initialState,
    reducers: {
        toggle: (state) => {
            console.log("CLICKED");
            state.value = !state.value;
        },
    },
});

export const { toggle } = showPopUpSlice.actions

export default showPopUpSlice.reducer;
