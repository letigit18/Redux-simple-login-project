import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/userSlicer'
const store = configureStore({
    reducer: {
        user: userReducer
    }
})
export default store;