import {useState} from "react";

function MovieEnt(props){
    const [magiknum,setMagiknum]=useState(0)
    const name=props.name
    return <div style={{
        margin: 15,

        border: "pink 18px solid"
    }}>
        <h2>{name}</h2>

        <button onClick={() => {

            setMagiknum(magiknum + 1)


        }}>nummer : [{magiknum}]
        </button>
    </div>


}

export default MovieEnt;