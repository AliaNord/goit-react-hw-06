import { configureStore } from "@reduxjs/toolkit";
import { contactsReduser } from "./contacts/contactsSlice";
import { filterReduser } from "./filter/filtersSlice";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReduser = persistReducer(persistConfig, contactsReduser);
export const store = configureStore({
  reducer: {
    contacts: persistedReduser,
    filter: filterReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
