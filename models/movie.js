const mongoose = require("mongoose")

const MovieSchema = new mongoose.Schema({
    movie_name: String,
    release_date: String,
    runtime: Number,
    poster: String,
    description: String,
    ratings: Number,
    producer: String,
    director: String,
    genre: [],
    type: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Movie', MovieSchema);