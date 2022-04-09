import { combineReducers } from "@reduxjs/toolkit";
import favorites from "./favorites";
import movies from "./movies";


export const rootReducer = combineReducers({
    favorites,
    movies

});


export type RootState = ReturnType<typeof rootReducer>;
