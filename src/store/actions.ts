import { createAction } from "@reduxjs/toolkit";
import { Movie } from "../models/Movies";

 const  add = createAction<string>("favorites/add");
 const  remove = createAction<string>("favorites/remove");
 

export {add,remove}