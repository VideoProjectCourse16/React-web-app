import React from "react";

 type Movie= {
    id: string;
    title: string;
    popularity: number;
    genre: string;
    original_language: string;
    plot: string;
    poster_path: string;
    trailer: string;
    backdrop_path: string;
    release_date: string;
    adult: boolean;
    vote_average: number;
}
type Movies= Movie[];

type signup={
    name: string;
    surname: string;
    username: string;
    password: string;
    repeatPassword:string;
}

type loginType={
  message:string,
  user:{
    username:string,
    token:string
  }
}

type staticFilm={
    id: number;
    image:string
    title: string;
    popularity: number;
    genre: string;
    trailer:string
}

export  type {Movie, Movies, signup, loginType, staticFilm}