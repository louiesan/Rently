import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorite: window.localStorage.getItem("favorites")
    ? JSON.parse(window.localStorage.getItem("favorites"))
    : [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addRemoveFavorite: (state, action) => {
      const index = state.favorite.findIndex(
        (e) => e.listingId === action.payload.listingId
      );

      if (index === -1) {
        state.favorite.push(action.payload);
      } else {
        state.favorite.splice(index, 1);
      }

      window.localStorage.setItem("favorites", JSON.stringify(state.favorite));
    },
  },
});

export default favoriteSlice.reducer;
export const { addRemoveFavorite } = favoriteSlice.actions;
