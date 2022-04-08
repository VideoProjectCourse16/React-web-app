import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { favoritesReducer } from "./reducer";


const rootReducer = combineReducers({
    favourites: favoritesReducer
 
  });

  const store = configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;

export default store