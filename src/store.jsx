import { configureStore } from "@reduxjs/toolkit";
import notSlicer from "./notSlicer";

 export const store=configureStore({
    reducer:{
        note:notSlicer,
    }
 })