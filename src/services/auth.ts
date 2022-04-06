import React from "react";
import axios from "axios";
import env from "../enviroments/stage";
import { loginType, signup } from "../models/Movies";
import { UserInfo } from '../models/user';
const {baseUrl}=env;

const login= async (username:string, password:string)=>
axios.post<loginType>(`${baseUrl}/auth/signin`, { username, password}, {headers: {'Content-Type': 'application/json',token: `Bearer ${localStorage.getItem('token')}`}});

const register = async (name:string,surname:string, username:string, password:string, repeatPassword:string)=>{
    return axios.post(`${baseUrl}/auth/signup`,{ name,surname, username, password, repeatPassword}) as Promise<{message:string}>
};

const getMe = async () =>{
    console.log(`${localStorage.getItem('token')}`)
return await axios.get<UserInfo>(`${baseUrl}/auth/me`, {headers: {'Content-Type': 'application/json', token: `Bearer ${localStorage.getItem('token')}`}})
}

export {login, register, getMe};