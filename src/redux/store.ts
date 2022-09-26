import { configureStore } from "@reduxjs/toolkit";
import dataparamsReducer from "./dataparams";

export default configureStore({
    reducer: {
        dataparams: dataparamsReducer
    }
})