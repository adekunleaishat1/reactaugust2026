import { configureStore } from "@reduxjs/toolkit";
import  countslice  from "./Countslice";


export const store = configureStore({
    reducer:{
        countslice
    }
})