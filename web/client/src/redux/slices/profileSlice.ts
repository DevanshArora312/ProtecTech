import { createSlice } from "@reduxjs/toolkit";

interface officer {
    firstname : string,
    lastname: string,
    username: string,
    email: string, 
    mobile: string,
    password: string,
    stars: number,
    role: string,
    department: string,
    thana_id: string
};

const loadFromLocalStorage = () => {
    const token = localStorage.getItem('token');
    const officer = localStorage.getItem('officer');

    return {
        token: token ? token : "",
        officer: officer ? JSON.parse(officer) : null
    };
};

const initialState : {token : string, officer: officer | null} = loadFromLocalStorage(); 

const profileSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action)=>{
            state.token = action.payload.token
            state.officer = action.payload.officer
        }
    }
})

export const {login} = profileSlice.actions;
export default profileSlice.reducer;