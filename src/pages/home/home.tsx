import React, { useEffect, useState } from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import { Movies } from "../../models/Movies";
import { getMovieByGenre, getMovies } from "../../services/movies";


const Home=()=>{

        const [films, setFilms]=useState<Movies|null>(null)
        const [genre, setgenre]=useState('')


    const  getFIlms= async ()=>{
        return getMovies().then(({data})=>setFilms(data)).catch((err)=>console.log(err.message))
        console.log(films)
    }


    useEffect(()=>{
        getFIlms();
    },[films])
    // array provvisoria 
    const links = ["https://picsum.photos/500/300?img=1","https://picsum.photos/500/300?img=2","https://picsum.photos/500/300?img=3","https://picsum.photos/500/300?img=1","https://picsum.photos/500/300?img=2","https://picsum.photos/500/300?img=3"]
return (
  
              
    <div className="bg">
        <div className='container-fluid indicators ' >
           
            <div className="row">
                <div className="col-12">
                    <Carousel  controls={true} nextIcon={<span aria-hidden="true" className="carousel-control-next-icon " /> } variant="dark"  pause={'hover'} >
                        
                    {
                        links.map((link,index)=>{
                            return   (
                            <Carousel.Item key={index}>
                            <img 
                                className="d-block img-dim"
                                src={link}
                                alt="First slide"
                            />
                        
                        </Carousel.Item>)
                        })
                    }


                    
                    </Carousel>                 
                </div>
            </div>
        </div>
    </div>
)

}
export default Home;