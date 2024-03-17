import { createSlice } from "@reduxjs/toolkit";

type isSigningUpState = {
    value: Boolean;
}

const initialState: isSigningUpState = {
    value: false,
};

const isSigningUpSlice = createSlice({
    name: "isSigningUp",
    initialState,
    reducers: {
        toggle: (state) => {
            state.value = !state.value;
        },

        setFalse: (state) => {
            state.value = false;
        },

        setTrue: (state) => {
            state.value = true;
        },
    },
});

export const { toggle, setFalse, setTrue} = isSigningUpSlice.actions

export default isSigningUpSlice.reducer;