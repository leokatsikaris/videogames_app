const {Videogame} = require ('../db');
const axios = require('axios');
const {v4: uuid} = require ('uuid');
const {API_GAMES, API_KEY} = require ('../../constants');

async function getVideogames (req, res){
    if (req.query){
        try {
            const videogames = await (axios.get(`${API_GAMES}?search=${req.query.name}&key=${API_KEY}`)); 
            return res.send(videogames);
        } catch (error){
            return res.status(400).send('Videogame not found');
        }
    }
    try {
        const videogames = await (axios.get(`${API_GAMES}?key=${API_KEY}`));
        return res.send(videogames); 
    } catch (error){
        return res.status(400).send('Videogame not found');
    }
}

async function getVideogamesById (req, res){
    if (req.params.idVideogame){
        try {
            const videogames = await (axios.get(`${API_GAMES}/${req.params.idVideogame}?key=${API_KEY}`));
            return res.send(videogames);
        } catch {
            return res.status(400).send('This ID does not belong to a videogame');
        }
    }
    return res.status(400).send('ID not provided');
}

module.exports = {
    getVideogames,
    getVideogamesById
}

