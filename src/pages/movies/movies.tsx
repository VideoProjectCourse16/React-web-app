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

type filmCard={searchMovies:Movies};

const MovieComponent: FC<filmCard> = ({searchMovies}) => {
  const goToFilm = (id: string) => {
    navigate(`/movies/${id}`);
  };
  const navigate = useNavigate();

  const links = [
    "https://picsum.photos/500/300?img=1",
    "https://picsum.photos/500/300?img=2",
    "https://picsum.photos/500/300?img=3",
    "https://picsum.photos/500/300?img=1",
    "https://picsum.photos/500/300?img=2",
    "https://picsum.photos/500/300?img=3",
  ];
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
              {links.map((link, index) => {
                return (
                  <Carousel.Item key={index}>
                    <Image
                      className="d-block img-dim"
                      
                      
                      style={{backgroundImage:`url(${link})`}}
                     // background-repeat: no-repeat; background-position: center; background-size: cover;
  
  
                      
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
