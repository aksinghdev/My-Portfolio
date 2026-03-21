import { createSlice } from "@reduxjs/toolkit"

const getInitialUser = () =>{
    try{
        const user = localStorage.getItem("user");
        return user ? JSON.parse(user) : null;
    }
    catch(error){
        console.error("Get error during user parsing from local Storage",error);
        return null;
    }
}


const initialState = {
    user: getInitialUser(),
    loading: false,
}

const userSlice = createSlice({

  name:"user",

  initialState,

  reducers:{

    setUser:(state,action)=>{
      state.user = action.payload
    },

    setLoading:(state,action)=>{
      state.loading = action.payload
    }

  }

})

export const {setUser,setLoading} = userSlice.actions

export default userSlice.reducer