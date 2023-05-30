import { createSlice } from "@reduxjs/toolkit";


export const searchSlice = createSlice({
    name: "searchSlice",
    initialState: {term: "", photos: []},
    reducers:{
        searchTerm: (state, action) => {state.term = action.payload},
        setPhotos: (state, action) => {state.photos = action.payload},
    }
})

export const {searchTerm, setPhotos} = searchSlice.actions
export default searchSlice.reducer 