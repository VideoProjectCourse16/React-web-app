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
import { fetchMovies } from "../../store/reducers/movies";


const genreMock= [
  'Action', 'Science Fiction', 'Adventure', 'Comedy', 'Fantasy', 'Family', 
  'Crime', 'Horror', 'Animation', 'Thriller', 'Drama', 'Romance', 'Western'
]
export const CarouselComponent: FC = () => {
  const dispatch = useDispatch();
  const goToFilm = (id: string) => {
    navigate(`/movies/${id}`);
  };
  let navigate = useNavigate();
  const [films, setFilms] = useState<Movie[]>([]);
  const [genre, setgenre]=useState<Movies>([])


  const getFilms = useCallback(() => {
    getMovies().then(({data})=>{setFilms(data); dispatch(fetchMovies(data))}).catch((err)=>console.log(err.message));
   

    // const data = movies.map((movie) =>movie);
    // console.log(data)
    // setFilms(data);
  }, [])

  const filtergenre=(): string[]=>{
    return films && films.map(item=>item.genre)
    .filter((film, i, ar)=>ar.indexOf(film)===i)
    // const data2=films.filter(film=>film.genre===)
    // setgenre(data2)
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
             {<FilmCard movieIesimo={goToFilm} movie={film} key={film.id} />}
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
