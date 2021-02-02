import React, {useState, useEffect} from "react";
import {navigate, Link} from "@reach/router";
import axios from "axios";

const MovieAll = () => {
    const [allMovies, setAllMovies] = useState([]);

    // axios is using route we made in server
    useEffect(() => {
        // props.id 
        axios.get("http://localhost:8000/api/movies")
            // res holds all the movies that are in the db
            // dont forget have to put res.data holds the data
             .then((res) => setAllMovies(res.data))
             .catch((err) => console.log(err));
    }, [])

    return(
        <div>
            <h2>Our Movie List</h2>
             {/* btn directs to MovieAdd component */}
             <Link to="/movies/new" >
                   <button>Add Movie</button>     
             </Link>
            {/* makes a p for all movies with a router */}
            {
                allMovies.map((movie,index) => (
                    <p>
                        {/* link takes us to the specific movie the movie one component */}
                        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
                    </p>
                ))
            }
        </div>
    )
}

export default MovieAll;