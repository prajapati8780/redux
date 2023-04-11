import { createSlice } from "@reduxjs/toolkit";


const countSlice=createSlice({
  name:'count',
  initialState:0,

  reducers:{
    add:(state,action)=>{
      const res=state+=action.payload
     
      return res
    },
    remove:(state,action)=>{
      const res=state-=action.payload
      return res
    }
  }

})

export const{add,remove}=countSlice.actions
export default countSlice.reducer