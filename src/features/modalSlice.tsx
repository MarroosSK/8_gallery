import { createSlice } from "@reduxjs/toolkit";


export const modalSlice = createSlice({
    name: "modalSlice",
    initialState: {open: false},
    reducers:{
        setOpen: (state, action) => {state.open = action.payload},
    }
})

export const {setOpen} = modalSlice.actions
export default modalSlice.reducer 