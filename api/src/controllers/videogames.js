const {Videogame} = require ('../db');
const axios = require('axios');
const {v4: uuid} = require ('uuid');
const {API_KEY, API_GAMES} = require ('../../constants');


async function addGame (req, res) {
  const id = uuid();
  try {
    const games = await Videogame.findOrCreate({
      where: {
        id,
        name: req.body.name,
        description: req.body.description,
        release_date: req.body.release_date,
        rating: req.body.rating,
        platforms: req.body.platforms, 
      },
    });
    
    if(games){
      return res.json({
          message: 'New game created successfully',
          data: games
      });
  }
} catch(err){
  console.log(err);
  res.status(500).send('Data error');
  }
}

// async function addGame (req, res){
//   const id = uuid();
//   const game = { ...req.body, id };
//   try {
//     const [games] = await Videogame.findOrCreate({
//       where: {
//           id: game.id,
//           name: game.name,
//           description: game.description,
//           release_date: game.releaseDate,
//           rating: game.rating,
//           platforms: game.platforms,
//           genre: game.genre,
//         }
//       });
//       let dbGenre = await Gender.findAll({
//         where: {name: game.genre}
//       });
//       games.addGender(dbGenre);
//       if(games){
//         let aux = [games];
//         return res.json({
//           message: 'New game created successfully',
//           data: aux
//         });
//       }
//     } catch(e){
//       res.status(500).send('Something went wrong');
//     }
//   }

async function getGamesFromDB (){
    const games = await Videogame.findAll();
    return games; 
}

async function getVideogames (req, res){
    if (req.query.name){
        let videogames = await (axios.get(`${API_GAMES}?search=${req.query.name}&key=${API_KEY}`));
        if (videogames.data.results[0]) return res.json(videogames.data.results.slice(0,15));

        return res.status(400).send('Videogame not found');

    } else {
        try {
            const videogames = await (axios.get(`${API_GAMES}?key=${API_KEY}`));
            const gamesFromDB = await getGamesFromDB();
            return res.json(gamesFromDB.concat(videogames.data.results)); 
        } catch (error){
            return res.status(400).send('Videogame not found');
        }
    }
}

async function getVideogamesById (req, res){
    try {
        const videogames = await axios.get(`${API_GAMES}/${req.params.idVideogame}?key=${API_KEY}`);
        return res.json(videogames.data);
    } catch {
        return res.status(400).send('This ID does not belong to a videogame');
    }
}

module.exports = {
    getVideogames,
    getVideogamesById,
    addGame
}