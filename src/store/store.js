import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./rent&buy/dataSlice";
import searchSlice from "./userSearch/searchSlice";
import detailSlice from "./details/detailSlice";
import favoriteSlice from "./favorites/favoriteSlice";

export const store = configureStore({
  reducer: {
    dataSlice,
    searchSlice,
    detailSlice,
    favoriteSlice,
  },
});
