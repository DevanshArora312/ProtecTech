import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: "",
    name : "",
    dob : "",
    gender : "",
    phone : "",
    contacts : []
};

const slice = createSlice({
    name : "user",
    initialState,
    reducers : {
    
    }
}) 

export const {} = slice.actions;
export default slice.reducer;