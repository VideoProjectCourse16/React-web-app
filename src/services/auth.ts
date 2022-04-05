import React from "react";
import axios from "axios";
import env from "../enviroments/stage";
import { loginType, signup } from "../models/Movies";
import { UserInfo } from '../models/user';
const {baseUrl}=env;

const login= async ( user:{username:string, password:string})=>
axios.post<loginType>(`${baseUrl}/auth/signin`, { user}, {headers: {'Content-Type': 'application/json',authorization: `Bearer ${localStorage.getItem('accessToken')}`}});

const register = async (name:string,surname:string, username:string, password:string, repeatPassword:string)=>{
    return axios.post(`${baseUrl}/auth/signup`,{ name,surname, username, password, repeatPassword}) as Promise<{message:string}>
};
const getMe = () =>  axios.get<UserInfo>(`${baseUrl}/auth/me`)

export {login, register, getMe};