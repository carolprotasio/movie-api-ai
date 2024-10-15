const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie')
const jwt = require('jsonwebtoken')

// Middleware for token authentication
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]; // Remove 'Bearer ' e pega o token

    if (!token) return res.status(403).send('Token required')

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(403).send('Invalid token')
        req.userId = decoded.userId;
        next()
    })
}
// Create a new movie
router.post('/movie', authenticateToken, async (req, res) => {
    const { title, director, year, genre, description } = req.body;

    if (!title || !director || !year || !genre || !description) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const movie = new Movie({ ...req.body, user: req.userId });
        await movie.save();
        res.status(201).json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all movies
router.get('/movie', authenticateToken, async (req, res) => {
    try {
        const movies = await Movie.find().populate('user', 'name email');
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a movie by ID
router.get('/movie/:id', authenticateToken, async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) return res.status(404).json({ message: 'Movie not found' });
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a movie by ID
router.put('/movie/:id', authenticateToken, async (req, res) => {
    const { description } = req.body; // Permitir apenas a atualização de 'description'

    if (description === undefined) {
        return res.status(400).json({ message: 'Description is required for update' });
    }

    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) return res.status(404).json({ message: 'Movie not found' });

        movie.description = description; // Atualiza apenas a descrição
        await movie.save(); // Salva as alterações

        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Delete a movie by ID
router.delete('/movie/:id', authenticateToken, async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);
        if (!movie) return res.status(404).json({ message: 'Movie not found' });
        res.status(200).json({ message: 'Movie deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
