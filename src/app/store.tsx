import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "../features/navigationSlice";
import searchReducer from "../features/searchSlice";
import modalReducer from "../features/modalSlice";
import favoriteReducer from "../features/favoriteSlice";
import trendingReducer from "../features/trendingSlice";

export const store = configureStore({
  reducer: {
    navigationSlice: navigationReducer,
    searchSlice: searchReducer,
    modalSlice: modalReducer,
    favoriteSlice: favoriteReducer,
    trendingSlice: trendingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
