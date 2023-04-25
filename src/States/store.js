import { configureStore } from "@reduxjs/toolkit";
import incdecReducer from "./reducers"

export default configureStore({
    reducer :{
        number: incdecReducer
    }
})