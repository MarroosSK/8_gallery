import { createSlice } from "@reduxjs/toolkit";
import { SinglePhotoType } from "../types/types";

interface FavSliceInterface {
  favoritePhotos: SinglePhotoType[];
}

const initialFavoriteState: FavSliceInterface = {
  favoritePhotos: [],
};

export const favoriteSlice = createSlice({
  name: "favoriteSlice",
  initialState: initialFavoriteState,
  reducers: {
    saveToFavoritePhotos: (state, action) => {
      const newPhoto: SinglePhotoType = action.payload;
      const existingIndex = state.favoritePhotos.findIndex(
        (photo: SinglePhotoType) => photo.id === newPhoto.id
      );

      if (existingIndex === -1) {
        state.favoritePhotos = [...state.favoritePhotos, newPhoto];
      }
    },
    removeFromFavoritesPhotos: (state, action) => {
      const newPhoto: SinglePhotoType = action.payload;
      state.favoritePhotos = state.favoritePhotos.filter(
        (photoToRemove: SinglePhotoType) => photoToRemove.id !== newPhoto.id
      );
    },
  },
});

export const { saveToFavoritePhotos, removeFromFavoritesPhotos } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
