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
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import { Movie, staticFilm } from "../../models/Movies";
import "./filmCard.css"
import { useNavigate }from 'react-router-dom'
import { add, remove } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectFavourites } from "../../store/selector";
import { postFavorite } from "../../services/movies";
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

type filmCard={movie:Movie,movieIesimo:(_:string)=>void};
const FilmCard: FC<filmCard>=({movie, movieIesimo})=> {
    const [is_elev, setElev]=useState(2 as 2|10)
    let [render, setRender]=useState<boolean>(false);  

    const classes = useStyles();
    //const [favorites, setFavorites]=useState<Movie[]>([]);
    const favouriteIds = useSelector(selectFavourites);
    const dispatch = useDispatch();

   

  return (
    <Card   style={{border: '3px solid blue'}}  elevation={is_elev}  onMouseOver={()=>{setElev(10); setRender(true)}} onMouseLeave={()=>{setElev(2); setRender(false)}} className={classes.root}>
      <CardActionArea  onClick={()=>movieIesimo(movie.id)}>
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
              <IconButton aria-label="add to favorites"  onClick={() => dispatch(add(movie.id))}>
                  <FavoriteIcon />
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