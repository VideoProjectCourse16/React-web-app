import axios from "axios";
import { stringify } from "querystring";
import React from "react";
import env from "../enviroments/stage";
import {Movies} from '../models/Movies'
import { UserInfo } from "../models/user";

const {baseUrl}=env;

/* const login= async (username:string, password:string)=>
axios.post<loginType>(`${baseUrl}/auth/signin`, { username,password}, {headers: {'Content-Type': 'application/json',authorization: `Bearer ${localStorage.getItem('accessToken')}`}}); */


const getMovies= ()=>axios.get<Movies>(`${baseUrl}/movies`);
const getMovieByGenre=(genre:string)=>axios.get<Movies>(`${baseUrl}/movies?genre=${genre}`);
const getMovieById=(id:string)=>axios.get<Movies>(`${baseUrl}/movies/${id}`);
const getMovieByTitle=(title:string)=>axios.get<Movies>(`${baseUrl}/movies?title=${title}`);

const  getUserInfo=()=>{
    return axios.get<UserInfo>(`${baseUrl}/auth/me`, {headers: {'Content-Type': 'application/json',authorization: `Bearer `}});
};
// users/favorites
const getFavorites = ()=> axios.get<Movies>(`${baseUrl}/users/favorites`,{headers: {'Content-Type': 'application/json',authorization: `Bearer `}});
const postFavorite = (username:string,id:string)=>axios.post<Movies>(`${baseUrl}//users/favorites`, { username,id},{headers: {'Content-Type': 'application/json',authorization: `Bearer ${localStorage.getItem('accessToken')}`}})

export {getMovies, getMovieByGenre,getFavorites,postFavorite,getMovieById, getMovieByTitle}
