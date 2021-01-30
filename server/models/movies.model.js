const mongoose = require("mongoose");

const MoviesSchema = new mongoose.Schema({
    title: {
        type: String
    },
    releaseDate: {},
    director: {},
    genre: {},
    runtime: {},
    coverArt: {}
}, 
{
    timestamps: true
});


module.exports(mongoose.model("Movie", MoviesSchema));