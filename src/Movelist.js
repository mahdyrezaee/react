import MovieEnt from "./MovieEnt";
import {useEffect, useState} from "react";

function Movelist(){
    // const movie=["terminator","titanic","shrek"]

    const [magiknum,setMagiknum]=useState(0)
    const [movies,setMovies]=useState([])

    useEffect(() => {
        console.log("running")
        const getMovies=async ()=> {
            const response = await fetch("http://localhost:6665/movies")
            const m=await response.json()
            console.log("Movies1",m)
            setMovies(m)
        }
        getMovies()



    }, []);
    console.log("debug")


    return<div>
        <h1>my movie</h1>
        <div>
            {movies.map(movies1=>(
                <MovieEnt name={movies1}/>
            ))}
        </div>

        <button onClick={() => {

            setMagiknum(magiknum+1)


        }}>nummer : [{magiknum}]</button>


    </div>


}

export default Movelist;