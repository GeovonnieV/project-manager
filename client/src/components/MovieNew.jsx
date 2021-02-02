import React, {useState, useEffect} from "react";
import {navigate, Link} from "@reach/router";
import axios from "axios";

const MovieNew = () => {
    const [title, setTitle] = useState("");
    const [coverArt, setCoverArt] = useState("");
    const [director, setDirector] = useState("");
    const [genre, setGenre] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [runtime, setRuntime] = useState("");
    const [errs, setErrs] = useState({});

     const submitForm = (e) => {
         e.preventDefault();

         axios.post("http://localhost:8000/api/movies", {
            //  going to the api http://localhost:8000/api/movies and filling in the db
            title: title,
            director: director,
            genre: genre,
            releaseDate: releaseDate, 
            runtime: runtime
         })
            .then((res) => {
                // if err show err
                if(res.data.errors){
                    setErrs(res.data.errors);
                } else {
                    // goes to the moviesOne route
                    navigate(`/movies/${res.data._id}`)
                }
            })
            .catch((err) => console.log(err));
     }

    return(
        <div>
            <h1>Movie new</h1>
            {/* when submited the submitForm function runs */}
            <form onSubmit={submitForm}>
                {/* title input */}
                <div>
                    <label>Title</label>
                    <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />
                    {/* if theres an error */}
                    {errs.title ? (
                        // 
                        <span>{errs.title.message}</span>
                    ) : null}
                </div>
                {/* director input */}
                <div>
                    <label>Director</label>
                    <input type="text" name="director" onChange={(e) => setDirector(e.target.value)} />
                    {/* if theres an error */}
                    {errs.director ? (
                        // 
                        <span>{errs.director.message}</span>
                    ) : null}
                </div>
                {/* releseDate input */}
                <div>
                    <label>Release Date</label>
                    <input type="text" name="releaseDate" onChange={(e) => setReleaseDate(e.target.value)} />
                    {/* if theres an error */}
                    {errs.releaseDate ? (
                        // 
                        <span>{errs.releaseDate.message}</span>
                    ) : null}
                </div>
                {/* runtime input */}
                <div>
                    <label>Runtime</label>
                    <input type="text" name="runtime" onChange={(e) => setRuntime(e.target.value)} />
                    {/* if theres an error */}
                    {errs.runtime ? (
                        // 
                        <span>{errs.runtime.message}</span>
                    ) : null}
                </div>
                <div>
                    <label>Genre</label>
                        <select name="genre" onChange={(e) => setGenre(e.target.value)}>
                            <option value="comedy">comedy</option>
                            <option value="thriller">thriller</option>
                            <option value="action">action</option>
                            <option value="romance">romance</option>
                        </select>
                          {/* if theres an error */}
                    {errs.genre ? (
                        // 
                        <span>{errs.genre.message}</span>
                    ) : null}
                </div>
                {/* go back to root path */}
                <Link to="/" >
                   <button>back</button>     
                </Link>
                {/* btn submits form */}
                <button type="submit">Add movie</button>
            </form>
        </div>
    )
}

export default MovieNew;