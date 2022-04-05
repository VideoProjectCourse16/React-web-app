import axios from "axios";
import React from "react";
import env from "../enviroments/stage";
import {Movie, Movies} from '../models/Movies'
import { UserInfo } from "../models/user";

const {baseUrl}=env;

const getMovies= ()=>axios.get<Movies>(`${baseUrl}/movies`);
const getMovieByGenre=(genre:string)=>axios.get<Movie>(`${baseUrl}/movies?genre=${genre}`);
const  getUserInfo=()=>{
    return axios.get<UserInfo>(`${baseUrl}/auth/me`, {headers: {'Content-Type': 'application/json',authorization: `Bearer `}});
};

export {getMovies, getMovieByGenre}