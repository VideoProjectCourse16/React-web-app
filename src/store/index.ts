import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/index";

export const store = configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;

export default store