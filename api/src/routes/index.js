const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getVideogames, getVideogamesById, addGame} = require ('../controllers/videogames');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', getVideogames);
router.use('/videogames/:idVideogame', getVideogamesById);
router.post('/videogame', addGame);

module.exports = router;
