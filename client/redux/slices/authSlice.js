

import { createSlice } from "@reduxjs/toolkit";


let token = null

try{
    const storedToken = localStorage.getItem("token");
    token = storedToken ? JSON.parse(storedToken) : null;
}catch(error){
    console.error("failed to read token form local storage ", error);
    token= null;
}

const initialState ={
    signupData : null,
    loading : false,
    token : token,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        setToken(state, action){
            state.token = action.payload
        },
        setSignupData(state, action){
            state.signupData = action.payload
        },
        setLoading(state, action){
            state.loading = action.payload
        }
    },
})

export const {setLoading, setSignupData, setToken} = authSlice.actions
export default authSlice.reducer