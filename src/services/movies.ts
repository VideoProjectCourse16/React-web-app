import axios from "axios";
import React from "react";
import env from "../enviroments/stage";
import {Movie, Movies} from '../models/Movies'
import { UserInfo } from "../models/user";

const {baseUrl}=env;

const getMovies= ()=>axios.get<Movies>(`${baseUrl}/movies`);
const getMovieByGenre=(genre:string)=>axios.get<Movie>(`${baseUrl}/movies?genre=${genre}`);
const getMovieById=(id:string)=>axios.get<Movie>(`${baseUrl}/movies/${id}`);

export {getMovies, getMovieByGenre, getMovieById}