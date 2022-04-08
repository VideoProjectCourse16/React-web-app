import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Movie, Movies} from "../../models/Movies";
import { getFavorites, postFavorite } from "../../services/movies";
import Image from 'react-bootstrap/Image'
import{ movies }from  "../../models/mock";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectFavourites } from "../../store/selector";
import{ Favorites, Favorite }from  "../../models/favourites";




/* id: string,
movieId: string,
username: string,  Omit<Todo, "completed" | "createdAt">; */
const FavoriteComponent=()=>{
    const [favorites, setFavorites]=useState<Favorite>();

    // const favourites = useSelector(selectFavourites);
    // const dispatch = useDispatch();
 
    const getFavourites = async() => {
        const {data} = await getFavorites()
        console.log('data',data)
        setFavorites(data)
    } 
    useEffect(()=>{
        getFavourites();
    },[]);

    useEffect(() => {
       favorites && console.log("fav", favorites);
    }, [favorites])
   
    return (
        <> 
        <Container>
        
        <Grid container>
         
            {favorites &&
            favorites.favorites.map( item=> {
               return <h1>{item.id}</h1>
            })}
                
        </Grid>
        </Container>
            
                
         
        
      
 </>  

    )}
export default FavoriteComponent;
/*"id": "string",
    "title": "string",
    "popularity": 0,
    "genre": "string",
    "original_language": "string",
    "plot": "string",
    "poster_path": 0,
    "trailer": "string",
    "backdrop_path": "string",
    "release_date": "string",
    "adult": true,
    "vote_average": "string" */