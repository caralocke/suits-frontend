import { combineReducers, configureStore } from "@reduxjs/toolkit";
import peopleReducer from '../features/peopleSlice';
import suitsReducer from '../features/suitsSlice';
import { devToolsEnhancer } from "redux-devtools-extension";

const reducer =  combineReducers({
  suitsReducer,
  peopleReducer
})

const store =  configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
  reducer,
  devTools: [devToolsEnhancer({ realtime: true})]
});

export default store;