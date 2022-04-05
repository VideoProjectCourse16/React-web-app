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
        const youtube = () => {
            const you = singleMovie?.trailer.split("=").splice(1);
            you?.splice(0, 0, "embed/");
            return you?.join('')
        }
        useEffect(()=>{
            loadData();
        },[])

        
        return(
            <div className="container-fluid p-5">
                <div style={{backgroundImage: `url(${singleMovie?.backdrop_path})`}} className="myCont">
                    {/* <img src={singleMovie?.backdrop_path} alt="" /> */}
                </div>
                { singleMovie && 
                    <div className="d-flex justify-content-center p-5 myDistance">
                        <iframe 
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            title="video"
                            width="650" height="450" 
                            src={`https://www.youtube.com/${youtube()}`}>
                        </iframe>
                    </div>
                }
                <h1 className="text-center">{ singleMovie?.title}</h1>
                <h5> Genre: {singleMovie?.genre} | language: {singleMovie?.original_language} |
                    popularity: {singleMovie?.popularity} | date: {singleMovie?.release_date} | vote_average: {singleMovie?.vote_average}</h5>
                <p>{singleMovie?.plot}</p> 
            </div>
            // <Container>
            //     <Grid container className="single-movie" spacing={1}>
            //         <Grid  item xs={12} md={4} spacing={1}>
            //             <h1>{ singleMovie?.title}</h1>
            //             <h5> Genre: {singleMovie?.genre} | language: {singleMovie?.original_language} |
            //             popularity: {singleMovie?.popularity} | date: {singleMovie?.release_date} | vote_average: {singleMovie?.vote_average}</h5>
            //             <p>{singleMovie?.plot}</p> 
            //         </Grid>
            //         <Grid  item xs={12} md={4} spacing={1}>
            //             { singleMovie && 
            //                 <iframe 
            //                 frameBorder="0"
            //                 allow="autoplay; encrypted-media"
            //                 allowFullScreen
            //                 title="video"
            //                 width="420" height="315"
            //                 src={singleMovie.trailer}>
            //                 </iframe>
            //             }
            //         </Grid>
            //         <Grid  item xs={12} md={4} spacing={1}>
            //             <img src={singleMovie?.backdrop_path} alt="" />
            //         </Grid>
            //     </Grid>
            // </Container>
        )
    }

    export default SingleFilm