import { createReducer } from "@reduxjs/toolkit";
import { Movie } from "../models/Movies";
import { add, remove } from "./actions";
import {postFavorite} from "../services/movies";
let ini:string="";
export const favoritesReducer = createReducer(ini,(builder)=>{
  builder
  .addCase(add, (_, action) =>{
    postFavorite(action.payload)
  }

  // .addCase(remove, (_, action) =>
   
  )})




