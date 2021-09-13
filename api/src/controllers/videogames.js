const { Videogame, Gender } = require ('../db');
const axios = require('axios');
const {v4: uuid} = require ('uuid');
const {API_KEY, API_GAMES} = require ('../../constants');


async function addGame (req, res) {
  const id = uuid();
  try {
    let games = await Videogame.create({
        id,
        name: req.body.name,
        description_raw: req.body.description_raw,
        released: req.body.released,
        rating: req.body.rating,
        platforms: req.body.platforms
    });

    const genderDB = await Gender.findAll({
        where: {
            name: req.body.genres
        }
    })

    for (let i=0; i < genderDB.length; i++){
        games.addGender(genderDB[i].dataValues.id);
    }
    
    return res.json({
        message: 'New game created successfully',
        data: games
    })
} catch(err){
    console.log(err);
  res.status(500).send({msg: 'Data error', err});
  }
}

async function getGamesFromDB (){
    const games = await Videogame.findAll({
        include: Gender
    });
    return games; 
}

async function getVideogames (req, res){
    if (req.query.name){
        let videogames = await (axios.get(`${API_GAMES}?search=${req.query.name}&key=${API_KEY}`));
        
        if (videogames.data.results[0]) return res.json(videogames.data.results.slice(0,15));

        return res.status(400).send('Videogame not found');

    } else {
        try {
            const gamesFromDB = await getGamesFromDB();

            let games1 = await (axios.get(`${API_GAMES}?key=${API_KEY}`));
            let videogames1 = games1.data.results

            let games2 = await (axios.get(`${API_GAMES}?key=${API_KEY}&page=2`));
            let videogames2 = games2.data.results;

            let games3 = await (axios.get(`${API_GAMES}?key=${API_KEY}&page=3`));
            let videogames3 = games3.data.results;

            let games4 = await (axios.get(`${API_GAMES}?key=${API_KEY}&page=4`));
            let videogames4 =  games4.data.results;

            let games5 = await (axios.get(`${API_GAMES}?key=${API_KEY}&page=5`));
            let videogames5 =  games5.data.results;


            const allVideogames = await [...videogames1, ...videogames2, ...videogames3, ...videogames4, ...videogames5];

            return res.json(gamesFromDB.concat(allVideogames));
        } catch (error){
            console.log('entré al catch');
            return res.status(400).send('Videogames not found');
        }
    }
}

async function getVideogamesById (req, res){
    try {
        const videogames = await axios.get(`${API_GAMES}/${req.params.idVideogame}?key=${API_KEY}`);
        if (videogames){
          return res.json(videogames.data);
        } else {
            const gameId = await Videogame.findByPk(req.params.idVideogame);
            return res.json(gameId);
        }
    } catch (error){
        console.log(error);
        return res.status(400).send('This ID does not belong to a videogame');
    }
}

module.exports = {
    getVideogames,
    getVideogamesById,
    addGame
}