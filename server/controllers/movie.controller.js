const Movie = require("../models/movie.model");

module.exports = {
    getAll: (req,res) => {
        Movie.find()
            .then((allMovies) => res.json(allMovies))
            .catch((err) => res.json(err))
    },
    create: (req,res) => {
        // req.body is all the NEW info we have recived 
        console.log(req.body)
        Movie.create(req.body)
            .then((newMovieObj) => res.json(newMovieObj))
            .catch((err) => {
                console.log("Error creating a movie document: " + err);
                res.json(err);
            })
    },
    getOne: (req,res) => {
        // in routes we got a :id param
        Movie.findById(req.params.id)
            .then((oneMovie) => res.json(oneMovie))
            .catch((err) => res.json(err))
    },
    update: (req,res) => {
        // {new: true} keeps all existing info
        Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})
            .then((updatedMovie) => res.json(updatedMovie))
            .catch((err) => res.json(err))
    },
    delete: (req,res) => {
        // {new: true} keeps all existing info
        Movie.findByIdAndDelete(req.params.id)
            .then((deleted) => res.json(deleted))
            .catch((err) => res.json(err))
    }
};