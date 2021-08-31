const {Videogame} = require ('../db');
const axios = require('axios');
const {v4: uuid} = require ('uuid');
const {API_KEY} = require ('../../constants');

async function getGamesFromDB (){
    const games = await Videogame.FindAll();
    return games; 
}

async function addGame (req, res) {
    const id = uuid();
    const game = { ...req.body, id };
    try {
      const games = await Videogame.findOrCreate({
        where: {
          id: game.id,
          name: game.name,
          description: game.description,
          release_date: game.release_date,
          rating: game.rating,
          platforms: game.platforms, 
        },
      });
      if(games){
        // let aux = [games]
        return res.json({
            message: 'New game created successfully',
            data: new Array(games)
        });
      }
    } catch(err){
      console.log(err);
      res.status(500).send('Data error');
    }
  }

async function getVideogames (req, res){
    if (req.query.name){
        const videogames = await (axios.get(`https://api.rawg.io/api/games?search=${req.query.name}&key=${API_KEY}`));
        const gamesCreated = await getGamesFromDB();
        if (videogames.data.results[0]) return res.json(gamesCreated + videogames.data.results);

        return res.status(400).send('Videogame not found');

    } else {
        try {
            const videogames = await (axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`));
            return res.json(videogames.data.results); 
        } catch (error){
            return res.status(400).send('Videogame not found');
        }
    }
}

async function getVideogamesById (req, res){
    if (req.params.idVideogame){
        try {
            console.log('Entre');
            const videogames = await (axios.get(`https://api.rawg.io/api/games/${req.params.idVideogame}?key=${API_KEY}`));
            return res.json(videogames.data.results);
        } catch {
            return res.status(400).send('This ID does not belong to a videogame');
        }
    }
    return res.status(400).send('ID not provided');
}

module.exports = {
    getVideogames,
    getVideogamesById,
    addGame
}

