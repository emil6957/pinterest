import { createSlice } from "@reduxjs/toolkit";

type ShowPopUpState = {
    value: Boolean;
}

const initialState: ShowPopUpState = {
    value: false,
};

const ShowPopUpSlice = createSlice({
    name: "popup",
    initialState,
    reducers: {
        toggle: (state) => {
            console.log("CLICKED");
            state.value = !state.value;
        },
    },
});

export const { toggle} = ShowPopUpSlice.actions

export default ShowPopUpSlice.reducer;
