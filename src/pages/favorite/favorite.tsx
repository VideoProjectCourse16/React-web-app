import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Movie, Movies} from "../../models/Movies";
import { getFavorites, postFavorite } from "../../services/movies";
import Image from 'react-bootstrap/Image'
import{ movies }from  "../../models/mock";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import{ Favorites, Favorite }from  "../../models/favorites";
import { fetchFavorites } from "../../store/reducers/favorites";
import { useFavorites } from "../../hooks/useFavorites";
import FilmCard from "../../components/filmCard/filmCard";




/* id: string,
movieId: string,
username: string,  Omit<Todo, "completed" | "createdAt">; */
const FavoriteComponent=()=>{
    const {filteredMovies} = useFavorites();
    const dispatch = useDispatch();
    const [favorites, setFavorites]=useState<Favorite>();

    // const favourites = useSelector(selectFavourites);
    // const dispatch = useDispatch();

    const getFavourites = async() => {
        const {data} = await getFavorites();
        dispatch(fetchFavorites(data.favorites));
        console.log('data',data);

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
            
                {filteredMovies() &&
                filteredMovies().map( film=> {
                    <FilmCard movie={film} key={film.id} />
                })}
                    
            </Grid>
            </Container>
        </>  

    )}
export default FavoriteComponent;
