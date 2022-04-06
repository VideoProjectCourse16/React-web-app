import { WithStyles } from "@material-ui/core";
import React, { Component, FC, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Movie, Movies, staticFilm } from "../../models/Movies";
import { getMovieByGenre, getMovies } from "../../services/movies";
import FilmCard from "../filmCard/filmCard";
import "./carousel.css";
import { useNavigate } from "react-router-dom";
import { movies } from "../../models/mock";

// export const staticMovies=[
//     {
//     id: 1,
//     image:'https://media.mymovies.it/contenuti/coverscreen/986/Gucci_Coverscreen_My-Pixel.jpeg',
//     title: 'harry poter',
//     popularity: 11,
//     genre: 'action',
//     trailer:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
//     },
//     {
//         id: 2,
//         image:"https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//         title: 'harry poter',
//         popularity: 10,
//         genre: 'action',
//         trailer:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
//     },
//     {
//         id: 3,
//         image:"https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//         title: 'harry poter',
//         popularity: 4,
//         genre: 'action',
//         trailer:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
//     },
//     {
//         id: 4,
//         image:"https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//         title: 'harry poter',
//         popularity: 3,
//         genre: 'action',
//         trailer:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
//     },
//     {
//         id: 5,
//         image:'https://media.mymovies.it/contenuti/coverscreen/986/Gucci_Coverscreen_My-Pixel.jpeg',
//         title: 'harry poter',
//         popularity: 11,
//         genre: 'action',
//         trailer:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
//         },
//         {
//             id: 6,
//             image:"https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//             title: 'harry poter',
//             popularity: 10,
//             genre: 'action',
//             trailer:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
//         },
//         {
//             id: 7,
//             image:"https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//             title: 'harry poter',
//             popularity: 4,
//             genre: 'action',
//             trailer:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
//         },
//         {
//             id:8,
//             image:"https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//             title: 'harry poter',
//             popularity: 3,
//             genre: 'action',
//             trailer:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
//         },
//         {
//             id: 9,
//             image:'https://scontent-mxp2-1.xx.fbcdn.net/v/t39.30808-6/242821313_4550399041687517_1816834778932675815_n.jpg?stp=dst-jpg_s960x960&_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_ohc=RkRkYwPU1eMAX8LXy-4&_nc_ht=scontent-mxp2-1.xx&oh=00_AT_FTvsytJvTn2x0A6D3E6Be4Bf__4loYHmPN1dVrf4ylA&oe=6246195A',
//             title: 'harry poter',
//             popularity: 11,
//             genre: 'action',
//             trailer:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
//             },
//             {
//                 id: 10,
//                 image:"https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//                 title: 'harry poter',
//                 popularity: 10,
//                 genre: 'action',
//                 trailer:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
//             },
//             {
//                 id: 11,
//                 image:"https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
//                 title: 'harry poter',
//                 popularity: 4,
//                 genre: 'action',
//                 trailer:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
//             },
//             {
//                 id:12,
//                 image:"https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//                 title: 'harry poter',
//                 popularity: 3,
//                 genre: 'action',
//                 trailer:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
//             },
// ]

export const CarouselComponent: FC = () => {
  const goToFilm = (id: string) => {
    navigate(`/movies/${id}`);
  };
  let navigate = useNavigate();
  const [films, setFilms] = useState<Movie[]>([]);
  //const [genre, setgenre]=useState('')
  const genre = [
    "Adventure",
    "Fantasy",
    "Animation",
    "Action",
    "Drama",
    "Horror",
  ];

  const getFilms = () => {
    // getMovies().then(({data})=>setFilms(data)).catch((err)=>console.log(err.message))
    // console.log(films)
    const data = movies.map((movie) => movie);
    setFilms(data);
  };

  /*const getGenreMovies = (term: string) => {
        const data=  movies.map((movie)=>movie);
        setFilms(data.filter(({genre})=>genre==term));
    }*/

  // const addToFavorites=(id:number)=>{
  //     if (!characters) return;
  //     const index = characters.findIndex(({id: idCharacter}) => id ===idCharacter);
  //   if(index!==-1){
  //     const result= characters.splice(index, 1);
  //     setCharacter([...characters]);
  //      setFavorites([...favorites, ...result])
  //     }

  //   }

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <>
      <h2>{genre.map((item) => item)}</h2>
      <Carousel
        arrows
        className="carousel"
        draggable
        itemClass=""
        keyBoardControl={true}
        minimumTouchDrag={80}
        pauseOnHover={true}
        ssr={true}
        focusOnSelect={true}
        infinite={false}
        responsive={{
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
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={3}
        swipeable
        shouldResetAutoplay={false}
        autoPlay={true}
      >
        {films &&
          films.map((film, index) => (
            <div style={{ marginRight: 10 }} key={index}>
              <FilmCard movieIesimo={goToFilm} movie={film} key={film.id} />
            </div>
          ))}
      </Carousel>
    </>
  );
};
