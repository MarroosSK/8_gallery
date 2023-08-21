import { createSlice } from "@reduxjs/toolkit";

export const trendingSlice = createSlice({
  name: "trendingSlice",
  initialState: { trendyPhotos: [] },
  reducers: {
    setTrendyPhotos: (state, action) => {
      state.trendyPhotos = action.payload;
    },
  },
});

export const { setTrendyPhotos } = trendingSlice.actions;
export default trendingSlice.reducer;
