import {configureStore} from "@reduxjs/toolkit"
import navigationReducer from "../features/navigationSlice"
import searchReducer from "../features/searchSlice"
import modalReducer from "../features/modalSlice"

export const store = configureStore({
    reducer: {
        navigationSlice: navigationReducer,
        searchSlice: searchReducer,
        modalSlice: modalReducer
    }
})