import { configureStore } from "@reduxjs/toolkit";
import countSlice from './slice'
export default configureStore({
    reducer:{
        count:countSlice,
    }
})