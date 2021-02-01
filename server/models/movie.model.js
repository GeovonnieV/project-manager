const mongoose = require("mongoose");

const MoviesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
    },
    releaseDate: {
        type: Date,
        required: true
    },
    director: {
        type: String,
        required: true,
        minlength: 3
    },
    genre: {
        type: String,
        required: true
    },
    runtime: {
        type: Number,
        min: 30,
        max: 200
    },
    coverArt: {
        type: String
    }
}, 
{
    timestamps: true
});

const Movie = mongoose.model("Movie", MoviesSchema);

module.exports = Movie;