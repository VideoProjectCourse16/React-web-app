import React, { FC, useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./movies.css";
import { Movie, Movies, staticFilm } from "../../models/Movies";
import { getMovieByGenre, getMovies } from "../../services/movies";
import { CarouselComponent } from "../../components/carousel/carousel";

import FilmCard from "../../components/filmCard/filmCard";
import Image from 'react-bootstrap/Image'
import { useNavigate } from "react-router";
import { movies } from "../../models/mock";

type filmCard={searchMovies:Movies};

const MovieComponent: FC<filmCard> = ({searchMovies}) => {
  const goToFilm = (id: string) => {
    navigate(`/movies/${id}`);
  };
  const navigate = useNavigate();

  //const [movies, setMovies] = useState([] as Movie[]) 
  /* useEffect(() => {
   
    getMovies().then(res => {   
      console.log(res.data)
      setMovies(res.data) // spariamo i dati dentro l aggiornamento dell array
    })} // il tempo in secondi
  , []) */

  return (
    <div className="homeContainer">
      <div className=" indicators ">
        <div className="row">
          <div className="col-12">
            <Carousel
              controls={true}
              nextIcon={
                <span
                  aria-hidden="true"
                  className="carousel-control-next-icon "
                />
              }
              variant="dark"
              pause={"hover"}
            >
              {movies.slice(0,12).map((link, index) => {
                return (
                  <Carousel.Item key={index}>
                    <Image
                      className="d-block img-dim"
                      
                      
                      style={{backgroundImage:`url(${link.backdrop_path})`}}
                  
  
                      
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row pt-5">
        {searchMovies.length>0 && (<h2 className="text-white">Ricerca</h2>)}
          {searchMovies &&
            searchMovies.map((film, index) => (
              <div className="col-3 mt-3" style={{ marginRight: 10 }} key={index}>
                <FilmCard movieIesimo={goToFilm} movie={film} key={film.id} />
              </div>
            
          ))}
        </div>
      </div>
      <div >
        <CarouselComponent />
      </div>
    </div>
  );
};

export default MovieComponent;
