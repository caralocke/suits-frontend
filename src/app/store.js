import { configureStore } from "@reduxjs/toolkit";
import dataReducer from '../features/dataSlice';
import { devToolsEnhancer } from "redux-devtools-extension";

export default configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
  reducer: {
    dataReducer
  },
  devTools: [devToolsEnhancer({ realtime: true})]
});