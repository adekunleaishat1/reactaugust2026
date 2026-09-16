import { createSlice } from "@reduxjs/toolkit";


export const countslice = createSlice({
   name:"counter",
  initialState:{
    count:0
   } ,
   reducers:{
    increment:(state)=>{
      state.count += 1  
    }
   }
})

export default countslice.reducer
export const {increment} = countslice.actions