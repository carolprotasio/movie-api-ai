const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    director: { type: String, required: true },
    year: { type: Number, required: true },
    genre: { type: String, required: true },
    description: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;
