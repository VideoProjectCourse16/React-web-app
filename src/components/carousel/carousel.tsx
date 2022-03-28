import { WithStyles } from "@material-ui/core";
import React,{ Component, FC, useEffect, useState}  from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Movies, staticFilm } from "../../models/Movies";
import { getMovieByGenre, getMovies } from "../../services/movies";
import FilmCard from "../filmCard/filmCard";
import "./carousel.css"

const staticMovies=[
    {
    id: 1,
    image:'https://scontent-mxp2-1.xx.fbcdn.net/v/t39.30808-6/242821313_4550399041687517_1816834778932675815_n.jpg?stp=dst-jpg_s960x960&_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_ohc=RkRkYwPU1eMAX8LXy-4&_nc_ht=scontent-mxp2-1.xx&oh=00_AT_FTvsytJvTn2x0A6D3E6Be4Bf__4loYHmPN1dVrf4ylA&oe=6246195A',
    title: 'harry poter',
    popularity: 11,
    genre: 'action'
    },
    {
        id: 2,
        image:"https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        title: 'harry poter',
        popularity: 10,
        genre: 'action'
    },
    {
        id: 3,
        image:"https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        title: 'harry poter',
        popularity: 4,
        genre: 'action'
    },
    {
        id: 4,
        image:"https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        title: 'harry poter',
        popularity: 3,
        genre: 'action'
    },
    {
        id: 5,
        image:'https://scontent-mxp2-1.xx.fbcdn.net/v/t39.30808-6/242821313_4550399041687517_1816834778932675815_n.jpg?stp=dst-jpg_s960x960&_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_ohc=RkRkYwPU1eMAX8LXy-4&_nc_ht=scontent-mxp2-1.xx&oh=00_AT_FTvsytJvTn2x0A6D3E6Be4Bf__4loYHmPN1dVrf4ylA&oe=6246195A',
        title: 'harry poter',
        popularity: 11,
        genre: 'action'
        },
        {
            id: 6,
            image:"https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            title: 'harry poter',
            popularity: 10,
            genre: 'action'
        },
        {
            id: 7,
            image:"https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            title: 'harry poter',
            popularity: 4,
            genre: 'action'
        },
        {
            id:8,
            image:"https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            title: 'harry poter',
            popularity: 3,
            genre: 'action'
        },
]

export const CarouselComponent: FC= ()=>{

    const [films, setFilms]=useState<Movies|null>(null)
    const [staticFilms, setStaticFilms]=useState<staticFilm[]>([])
    const [genre, setgenre]=useState('')


const  getFIlms=()=>{
    getMovies().then(({data})=>setFilms(data)).catch((err)=>console.log(err.message))
    console.log(films)
}
const  getStaticFilms=async ()=>{
    setStaticFilms(staticMovies)
    console.log(staticFilms)

}

// const addToFavorites=(id:number)=>{
//     if (!characters) return;
//     const index = characters.findIndex(({id: idCharacter}) => id ===idCharacter);
//   if(index!==-1){
//     const result= characters.splice(index, 1);
//     setCharacter([...characters]);
//      setFavorites([...favorites, ...result])
//     }
    
//   }

    useEffect(()=>{
        //getFIlms();
        getStaticFilms()
    },[films])


return(
    <Carousel
    additionalTransfrom={0}
    arrows
    autoPlay={false}
    autoPlaySpeed={3000}
    centerMode={false}
    className="carousel"
    //containerClass="container"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite={false}
    itemClass=""
    keyBoardControl
    //minimumTouchDrag={80}
    renderButtonGroupOutside={false}
    renderDotsOutside={false}
    responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 3,
          partialVisibilityGutter: 40
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 2,
          partialVisibilityGutter: 30
        }
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
        {staticFilms && staticFilms.map((film, index)=>
        <div style={{marginRight:10}} key={index}>
            <FilmCard  movie={film} key={film.id}/>
        </div>
        )}
</Carousel>

)

}
