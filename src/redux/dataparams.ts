import { createSlice } from "@reduxjs/toolkit";


const initialState = {

}

const dataparams = createSlice({
    name: "data",
    initialState: {
        location: "",
        term: "",
        data: {},
    },
    reducers: {
        updateLocation: (state, action) => {
            state.location = action.payload
        },
        updateTerm: (state, action) => {
            state.term = action.payload
        },
        updateData: (state, action) => {
            state.data = action.payload
        }

    }
});

export const { updateLocation, updateTerm, updateData } = dataparams.actions

export default dataparams.reducer