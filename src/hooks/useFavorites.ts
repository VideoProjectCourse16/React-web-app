import { useCallback, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../services/auth";
import { getFavorites, getMovies, postFavorite } from "../services/movies";
import { RootState } from "../store";
import { addFavorite, fetchFavorites } from "../store/reducers/favorites";
import { fetchMovies } from "../store/reducers/movies";
import { fetchUser } from "../store/reducers/user";

export const useFavorites = () => {
    const {favorites} = useSelector(({favorites}: RootState) =>favorites);
    const {movies} = useSelector(({movies}: RootState) =>movies);
    const {user} = useSelector(({user}: RootState) =>user);

    const dispatch = useDispatch();

    const filteredMovies = useCallback(() => {
        if(!favorites || !movies) return [];
        return movies.filter(({id}) => favorites.some(({movieId}) => movieId === id));
    }, [favorites, movies]);

    useEffect(() => {
        (async() => {
            !movies && dispatch(fetchMovies( (await getMovies()).data )) 
            !favorites && dispatch(fetchFavorites((await getFavorites()).data.favorites))
            !user && dispatch(fetchUser((await getMe()).data))
        })()
    }, []);

    const addFavorite = async(id: string) => {
        try {
            console.log('id', id);
            const {data} = await postFavorite(id);
            dispatch(addFavorite(data.favorite.movieId));
        }catch (e: any) {
            console.log(e.response.data.message)
        }
    }

    return {favorites, addFavorite, filteredMovies, user};
    

}