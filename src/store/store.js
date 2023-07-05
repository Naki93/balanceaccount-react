
import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "../features/counter.js";

//Create and configure a store where all of the states and variables
//The store will have a property called reducer which is an object that will include all the reducers that I need to have
export default configureStore({
    reducer: {
        counter: counterReducer
    }
})