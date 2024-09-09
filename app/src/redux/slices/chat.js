import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chat : []
}

const slice = createSlice({
    name : "chat",
    initialState,
    reducers : {
        loadChat : (state,action) => {
            state.chat = action.payload
        },
        pushChat : (state,action) => {
            state.chat.push(action.payload)
        }
        
    }
}) 

export const {loadChat,pushChat} = slice.actions;
export default slice.reducer;