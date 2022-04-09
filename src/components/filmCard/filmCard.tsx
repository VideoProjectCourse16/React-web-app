import React,{FC, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IconButton } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import { Movie, staticFilm } from "../../models/Movies";
import "./filmCard.css"
import { useNavigate }from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { postFavorite, remFavorite } from "../../services/movies";
import { useFavorites } from "../../hooks/useFavorites";
//import { useFavorites } from "../../hooks/useFavorites";
//import {player} from 'video-react'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderRadius: 5
  },
  media: {
    height: 200,
  },
});

type filmCard={movie:Movie,movieIesimo?:(_:string)=>void};


const FilmCard: FC<filmCard>=({movie, movieIesimo})=> {
    const { favorites, user, addFavorite } = useFavorites();
    const [is_elev, setElev]=useState<2 | 10>(2);
    const [render, setRender]=useState<boolean>(false);  

    const classes = useStyles();
  

  return (
    <Card   style={{border: '3px solid blue'}}  elevation={is_elev}  onMouseOver={()=>{setElev(10); setRender(true)}} onMouseLeave={()=>{setElev(2); setRender(false)}} className={classes.root}>
      <CardActionArea  onClick={()=>movieIesimo && movieIesimo(movie.id)}>
        { render ?
          <iframe 
            frameBorder="0"
            title="video"
            className="trailer"
            src={`${movie.trailer}?autoplay=1&mute=1&loop=1&controls=0&rel=0`}/>
        :
        <CardMedia
            className={classes.media}
            image={movie.backdrop_path}
            title={movie.title} 
        />
        
        }
          <CardContent>
              <Typography gutterBottom variant="h5" component="h5">
              {movie.title}
              </Typography>
              <Typography gutterBottom variant="h6" component="h6">
              { movie.genre}
              </Typography>
          </CardContent>
      </CardActionArea>
        <CardActions>
          { 
            //favouriteIds.includes(movie.id) &&
            favorites ?
              <IconButton aria-label="add to favorites" onClick={() => addFavorite(movie.id)} >
                  <FavoriteBorderIcon />
              </IconButton>
              : <IconButton aria-label="add to favorites" onClick={() => remFavorite(String(user!.user.id),movie.id)} >
                  <FavoriteIcon color="error" />
                </IconButton>
          }
        </CardActions>
    </Card>
  );
}

export default FilmCard;


// function async(arg0: () => void): <UserInfo>() => any {
//   throw new Error("Function not implemented.");
// }
// <button onClick={() => dispatch(add(character.id))}>Aggiungi</button>