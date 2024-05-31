const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    genre: {
        type: Array,
        required: true
    },
    rate: {
        type: Number
    },
    poster: {
        type: String,
        required: true
    }
})

const Movie = mongoose.model('Movie', movieSchema, 'Movies')


module.exports = Movie