import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token : null,
    userId : null 
}

const slice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        setToken : (state,action) => {
            state.token = action.payload
        },
        setUser : (state,action) => {
            state.userId = action.payload
        },
        
    }
}) 

export const {setToken,setUser} = slice.actions;
export default slice.reducer;