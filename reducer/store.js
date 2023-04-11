import { configureStore } from "@reduxjs/toolkit";
import countSlice from './slice'
import incSlice from './slice2'
export default configureStore({
    reducer:{
        count:countSlice,
        inc1:incSlice,
    }
})