import axios from "axios";
import { stringify } from "querystring";
import React from "react";
import env from "../enviroments/stage";
import {Movies} from '../models/Movies'
import { UserInfo } from "../models/user";
import { Favorite, Favorites, PostFavorite } from "../models/favorites";
const {baseUrl}=env;

/* const login= async (username:string, password:string)=>
axios.post<loginType>(`${baseUrl}/auth/signin`, { username,password}, {headers: {'Content-Type': 'application/json',authorization: `Bearer ${localStorage.getItem('accessToken')}`}}); */

const getMovies= ()=>axios.get<Movies>(`${baseUrl}/movies`);
const getMovieByGenre=(genre:string)=>axios.get<Movies>(`${baseUrl}/movies?genre=${genre}`);
const getMovieById=(id:string)=>axios.get<Movies>(`${baseUrl}/movies/${id}`);
const getMovieByTitle=(title:string)=>axios.get<Movies>(`${baseUrl}/movies?title=${title}`);

const getFavorites = ()=> axios.get<Favorite>(`${baseUrl}/users/favorites`,{headers: {'Content-Type': 'application/json', authorization: `Bearer ${localStorage.getItem('token')}`}});
const postFavorite = (id:string)=>axios.post<PostFavorite>(`${baseUrl}/users/favorites`, {movieId: id},{headers: {'Content-Type': 'application/json', authorization: `Bearer ${localStorage.getItem('token')}`}})

export {getMovies, getMovieByGenre,getFavorites,postFavorite,getMovieById, getMovieByTitle}
