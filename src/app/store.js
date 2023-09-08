import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from '../features/peopleSlice';
import { devToolsEnhancer } from "redux-devtools-extension";

export default configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
  reducer: {
    people: peopleReducer
  },
  devTools: [devToolsEnhancer({ realtime: true})]
})