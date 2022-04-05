import { Grid } from "@mui/material";
import axios from "axios";
import React, {FC, useEffect, useState} from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Movie } from "../../models/Movies";
import { getMovieById } from "../../services/movies";
import { movies } from "../../models/mock";
import './singleFilm.css'
import { Container } from "react-bootstrap";




    const SingleFilm: FC =()=>{
        let { id }= useParams() as {id:string};
        const [singleMovie, setSingleMovie]=useState<Movie>()
       const loadData=(()=>{
        //getMovieById(id).then((res)=>setSingleMovie(res.data));
        const res=movies.find(({id:idFilm})=>idFilm===id);
        setSingleMovie(res)
        })
        useEffect(()=>{
            loadData();
        },[])
        return(
            <Container>
                <Grid container className="single-movie" spacing={1}>
                    <Grid  item xs={12} md={4} spacing={1}>
                        <h1>{ singleMovie?.title}</h1>
                        <h5> Genre: {singleMovie?.genre} | language: {singleMovie?.original_language} |
                         popularity: {singleMovie?.popularity} | date: {singleMovie?.release_date} | vote_average: {singleMovie?.vote_average}</h5>
                         <p>{singleMovie?.plot}</p>
                           
                    </Grid>
                    <Grid  item xs={12} md={4} spacing={1}>
                        { singleMovie && 
                            <iframe 
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            title="video"
                            width="420" height="315"
                            src={singleMovie.trailer}>
                            </iframe>
                        }
                    </Grid>
                    <Grid  item xs={12} md={4} spacing={1}>
                        <img src={singleMovie?.backdrop_path} alt="" />
                           
                    </Grid>
                </Grid>
            </Container>
        )
    }

    export default SingleFilm