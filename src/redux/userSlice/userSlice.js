import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: '',
    password: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        logIn: (state, action) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
        logOut: (state)=>{
            state.email = '',
            state.password = ''
        }
    }
})

export const {logIn, logOut} = userSlice.actions;
export default userSlice.reducer;