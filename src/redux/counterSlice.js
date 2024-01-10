import { createSlice } from "@reduxjs/toolkit";


const counterSlice=createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state,actions)=>{
            state.value=state.value+actions.payload;
        },
        decrement:(state)=>{
            state.value=state.value-1
        },
        reset:(state)=>{
            state.value=0
        }
    }
});

export const {increment,decrement,reset}=counterSlice.actions;
export default counterSlice.reducer;