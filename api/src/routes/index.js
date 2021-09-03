const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getVideogames, getVideogamesById, addGame} = require ('../controllers/videogames');
const {getGenres} = require ('../controllers/genres');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/videogames', getVideogames);
router.get('/videogame/:idVideogame', getVideogamesById);
router.post('/videogame', addGame);
router.get('/genres', getGenres);

module.exports = router;
