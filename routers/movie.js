const express = require('express'); 
const router = express.Router()  
const Movie = require('../controllers/movie')
  
router.route('/').get(Movie.getAll); 
router.route('/add').post(Movie.add);   
router.route('/:id').get(Movie.getById);  
router.route('/:id').delete(Movie.deleteById);  
router.route('/:id').patch(Movie.update);   
 
module.exports = router;  
 