const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getVideogames, getVideogamesById} = require ('../controllers/videogames');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', getVideogames);
router.use('/videogames/:idVideogame', getVideogamesById);

module.exports = router;
