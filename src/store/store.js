import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/userSlicer'
const store = configureStore({
    reducer: userReducer
})
export default store;