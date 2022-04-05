import React, {FC, useEffect} from "react";
import { useParams, useSearchParams } from "react-router-dom";




    const SingleFilm: FC =()=>{
        let { id }= useParams();
        return(
            <h1>{`sono nel single movie di id: ${id}`}</h1>
        )
    }

    export default SingleFilm