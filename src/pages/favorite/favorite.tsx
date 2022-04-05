import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Movie } from "../../models/Movies";
import { getFavorites, postFavorite } from "../../services/movies";

const fakeFavorites=[
    {
    id: "1",
    image:'https://media.mymovies.it/contenuti/coverscreen/986/Gucci_Coverscreen_My-Pixel.jpeg',
    title: 'harry poter',
    popularity: 11,
    genre: 'action',
    trailer:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
    },
    {
        id: "2",
        image:"https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        title: 'harry poter',
        popularity: 10,
        genre: 'action',
        trailer:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
    },
    {
        id: "3",
        image:"https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        title: 'harry poter',
        popularity: 4,
        genre: 'action',
        trailer:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
    },
    {
        id: "4",
        image:"https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        title: 'harry poter',
        popularity: 3,
        genre: 'action',
        trailer:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
    },
    {
        id: "5",
        image:'https://media.mymovies.it/contenuti/coverscreen/986/Gucci_Coverscreen_My-Pixel.jpeg',
        title: 'harry poter',
        popularity: 11,
        genre: 'action',
        trailer:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
        },
        {
            id: "6",
            image:"https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            title: 'harry poter',
            popularity: 10,
            genre: 'action',
            trailer:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
        },
        {
            id: "7",
            image:"https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            title: 'harry poter',
            popularity: 4,
            genre: 'action',
            trailer:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
        },
        {
            id:"8",
            image:"https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            title: 'harry poter',
            popularity: 3,
            genre: 'action',
            trailer:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
        },
        {
            id: "9",
            image:'https://scontent-mxp2-1.xx.fbcdn.net/v/t39.30808-6/242821313_4550399041687517_1816834778932675815_n.jpg?stp=dst-jpg_s960x960&_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_ohc=RkRkYwPU1eMAX8LXy-4&_nc_ht=scontent-mxp2-1.xx&oh=00_AT_FTvsytJvTn2x0A6D3E6Be4Bf__4loYHmPN1dVrf4ylA&oe=6246195A',
            title: 'harry poter',
            popularity: 11,
            genre: 'action',
            trailer:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
            },
            {
                id: "10",
                image:"https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                title: 'harry poter',
                popularity: 10,
                genre: 'action',
                trailer:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
            },
            {
                id: "11",
                image:"https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
                title: 'harry poter',
                popularity: 4,
                genre: 'action',
                trailer:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
            },
            {
                id:"12",
                image:"https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
                title: 'harry poter',
                popularity: 3,
                genre: 'action',
                trailer:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
            },
]




const Favorite=()=>{
    // originale quando
    /* const [favorites, setFavorites]=useState<Movie[]>([]);
    useEffect(()=>{
        getFavorites().then(res =>{
            console.log(res.data)
            setFavorites(res.data)
        })
    },[]) */
    const video = 'https://www.youtube.com/watch?v=BoohRoVA9WQ&ab_channel=Movieclips'
    const [favorites, setFavorites]=useState<Movie[]>([]);
    return (
        <>{
            fakeFavorites.map((item)=>{
               return( <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Title>{item.id}</Card.Title>
                                <Card.Text>
                                {item.popularity}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>)})
                
         
        }

 </>  

    )}
export default Favorite;
/*"id": "string",
    "title": "string",
    "popularity": 0,
    "genre": "string",
    "original_language": "string",
    "plot": "string",
    "poster_path": 0,
    "trailer": "string",
    "backdrop_path": "string",
    "release_date": "string",
    "adult": true,
    "vote_average": "string" */