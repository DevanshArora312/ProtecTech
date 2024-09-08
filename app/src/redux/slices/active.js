import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    active : {}
}

const slice = createSlice({
    name : "active",
    initialState,
    reducers : {
        setActive : (state,action) => {
            state.active[action.payload.name] = action.payload.intv
        },
        
        
    }
}) 

export const {setActive} = slice.actions;
export default slice.reducer;