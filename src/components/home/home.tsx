import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

const Home=()=>{
    // array provvisoria 
    const links = ["https://picsum.photos/500/300?img=1","https://picsum.photos/500/300?img=2","https://picsum.photos/500/300?img=3"]
return (
    <div>
        <div className='container-fluid' >
           
            <div className="row">
                <div className="col-12">
                    <Carousel controls={true} nextIcon={<span aria-hidden="false" />} >

                    {
                        links.map(link =>{
                          return   (<Carousel.Item>
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