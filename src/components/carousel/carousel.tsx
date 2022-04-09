import { WithStyles } from "@material-ui/core";
import React, { Component, FC, useCallback, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Movie, Movies, staticFilm } from "../../models/Movies";
import { getMovieByGenre, getMovies } from "../../services/movies";
import FilmCard from "../filmCard/filmCard";
import "./carousel.css";
import { useNavigate } from "react-router-dom";
import { movies } from "../../models/mock";
import { useDispatch } from "react-redux";
import { useFavorites } from "../../hooks/useFavorites";

export const CarouselComponent: FC = () => {
  const {user} = useFavorites();
  let navigate = useNavigate();
  const goToFilm = (id: string) => {
    navigate(`/movies/${id}`);
  };
  const goSignin = () => navigate('/signin');
  
  const [films, setFilms] = useState<Movie[]>([]);

  const getFilms = useCallback(() => {
    getMovies().then((res)=>{
      setFilms(res.data)
    })   
  }, [])

  //const getFilms = () => setFilms(movies)

  const filtergenre=(): string[]=>{
    return films && films.map(item=>item.genre)
    .filter((film, i, ar)=>ar.indexOf(film)===i)
  }

  const getMoviesByGenre=((term:string)=> films.filter(({genre})=>genre===term))

    const responsive={
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 5,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }

  useEffect(() => {
    getFilms();

    
    //filterFilm()
  }, []);
  return (
      <>
      {
         filtergenre().map((item, i)=>
         <React.Fragment key={i}>
         <h2 style={{color:'white'}} key={item}>Films di {item} </h2>
        <Carousel  responsive={responsive} arrows={true} className="carousel" draggable keyBoardControl={true}
         minimumTouchDrag={80} pauseOnHover={true} ssr={true} focusOnSelect={true} infinite={false}
         showDots={true} sliderClass="" slidesToSlide={3} swipeable shouldResetAutoplay={false} autoPlay={false}
          > 
       {
         
         getMoviesByGenre(item).map((film, index) => 
            <div style={{ marginRight: 10 }} key={index}>
             {<FilmCard movieIesimo={ user ? goToFilm : goSignin} movie={film} key={film.id} />}
            </div>
         )
       }
      
      </Carousel> 
     </React.Fragment>
      )
         
    }
  </>
  );
};
