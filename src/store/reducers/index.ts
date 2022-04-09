import { combineReducers } from "@reduxjs/toolkit";
import favorites from "./favorites";
import movies from "./movies";
import user from './user'


export const rootReducer = combineReducers({
    favorites,
    movies,
    user

});


export type RootState = ReturnType<typeof rootReducer>;
