import React, {useState, useEffect} from "react";
import {navigate, Link} from "@reach/router";
import axios from "axios";

const MovieOne = (props) => {
    const [movie, setMovie] = useState({});

    // axios is using route we made in server
    useEffect(() => {
        // props.id 
        axios.get("http://localhost:8000/api/movies/" + props.id)
            // res holds all the movies that are in the db
            // dont forget have to put res.data holds the data
             .then((res) => setMovie(res.data))
             .catch((err) => console.log(err));
    }, [])

    return(
        <div>
            <h2>{movie.title}</h2>
            <p>Director: {movie.director}</p>
            <p>Genre: {movie.genre}</p>
            <p>Release Date: {movie.releaseDate}</p>
            <p>Run time: {movie.runtime} min</p>
            {/* goes back to get all */}
            <Link to="/">
                <button>Back</button>
            </Link>
        </div>
    )
}

export default MovieOne;