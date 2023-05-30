import { createSlice } from "@reduxjs/toolkit";


export const navigationSlice = createSlice({
    name: "navigationSlice",
    initialState: {isOpen: false},
    reducers: {
        toggleNav: (state, action) => {state.isOpen = action.payload}
    }
})

export const {toggleNav} = navigationSlice.actions
export default navigationSlice.reducer
