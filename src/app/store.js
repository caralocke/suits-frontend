import { configureStore } from "@reduxjs/toolkit";
import dataReducer from '../features/dataSlice';
import { devToolsEnhancer } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, dataReducer)

export const store =  configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
  reducer: {
    persistedReducer
  },
  devTools: [devToolsEnhancer({ realtime: true})],
});

export const persistor = persistStore(store)