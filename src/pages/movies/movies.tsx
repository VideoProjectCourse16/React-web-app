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


  return (
    <div className="homeContainer">
      <div className=" indicators ">
        <div className="row">
          <div className="col-12">
         
            <Carousel
              controls={true}
              prevIcon={
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#fff" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
              </svg>
              }
             
              nextIcon={
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#fff" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
              </svg>
              }
              pause={"hover"}
            >
              {movies.slice(0,13).map((link, index) => {
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
