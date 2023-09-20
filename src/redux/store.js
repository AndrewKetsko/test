import { configureStore } from "@reduxjs/toolkit";
import { rentalApi } from "./rentalApi";
import { persistSliceReducer } from "./slice";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

export const store = configureStore({
  reducer: {
    favorite: persistSliceReducer,
    [rentalApi.reducerPath]: rentalApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    rentalApi.middleware,
  ],
});
export const persistor = persistStore(store);
