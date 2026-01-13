import { createSlice } from "@reduxjs/toolkit";
import type { AuthState } from "./type";

const initialState:AuthState={
    user:null,
    loading:true
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUser(state,action){
            state.user=action.payload;
            state.loading=false;
        },
        clearUser(state){
            state.user=null;
            state.loading=false;
        },
        setLoading(state){
            state.loading=true;
        }
    }
})

export const {setUser, clearUser, setLoading} = authSlice.actions
export default authSlice.reducer