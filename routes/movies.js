const router = require('express').Router();
const { createMovieValidation, deleteMovieValidation } = require('../utils/validation');
const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

router.get('/', getMovies);

router.post(
  '/',
  createMovieValidation,
  createMovie,
);

router.delete(
  '/:id',
  deleteMovieValidation,
  deleteMovie,
);

module.exports = router;
