import { createSlice } from "@reduxjs/toolkit";
import userData from '../userData'
const userSlice = createSlice(
    {
        name: "user",
        initialState:userData,
        reducers: {
            login: (state, action)=>{

            }
        }
    }
)
export const {login} = userSlice.actions;
export default userSlice.reducer;