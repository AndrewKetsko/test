import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: { favorite: [] },
  reducers: {
    setFavorite({ favorite }, { payload }) {
      favorite.push(payload);
    },
    delFavorite({ favorite }, { payload }) {
      favorite.splice(favorite.indexOf(payload), 1);
    },
  },
});

export const { setFavorite, delFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;

const persistConfig = {
  key: "favorite",
  storage,
  whitelist: ["favorite"],
};

export const persistSliceReducer = persistReducer(
  persistConfig,
  favoriteSlice.reducer
);
