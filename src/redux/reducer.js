import {createAction, createReducer} from "@reduxjs/toolkit";

const INCREMENT_NUM = 'INCREMENT_NUM';
const DECREMENT_NUM = 'DECREMENT_NUM';
const RESET = 'RESET';
const SET_TEXT = 'SET_TEXT';
const PLUS_5 = 'PlUS_5';
const MINUS_5 = 'MINUS_5';

export const incrementNum = createAction(INCREMENT_NUM);
export const decrementNum = createAction(DECREMENT_NUM);
export const resetNum = createAction(RESET);
export const plus_5 = createAction(PLUS_5);
export const minus_5 = createAction(MINUS_5);
export const setText = createAction(SET_TEXT);



const initialState={
    num:0,
    text: 'Hello World!'
}



export default createReducer(initialState, (builder)=>{
    builder
    .addCase(INCREMENT_NUM,(state,action)=>{
        if (state.num<15) state.num++
    })
    .addCase(DECREMENT_NUM, (state)=>{
         if (state.num>0) state.num--   
    })
    .addCase(RESET,(state)=>{
        state.num=0
    })
    .addCase(SET_TEXT,(state, action)=>{
        state.text = action.payload
    })
    .addCase(PLUS_5,(state)=>{
        if(state.num+5<=15) state.num = state.num + 5
        else{
            state.num=15
        }
    })
    .addCase(MINUS_5,(state)=>{
        if(state.num-5>=0) state.num = state.num - 5
        else{
            state.num=0
        }
    })
})