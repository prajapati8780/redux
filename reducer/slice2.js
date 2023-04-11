import { createSlice } from "@reduxjs/toolkit";


const incSlice=createSlice({
  name:'inc1',
  initialState:0,

  reducers:{
    inc:(state,action)=>{
      const res=state+=action.payload
     
      return res
    },
    dec:(state,action)=>{
      const res=state-=action.payload
      return res
    }
  }

})

export const{inc,dec}=incSlice.actions
export default incSlice.reducer