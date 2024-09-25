import { createSlice } from "@reduxjs/toolkit";

const NoteSlicer=createSlice({
    name:'note',
    initialState:{
      detail:[]
    },
    reducers:{add:((state,action)=>{
        state.detail.push(action.payload)
    })},
})
export const {add}=NoteSlicer.actions
export default NoteSlicer.reducer