const {Gender} = require ('../db');
const axios = require('axios');
const {v4: uuid} = require ('../../node_modules/uuid');
const {API_GENRES, API_KEY} = require ('../../constants');

async function createGender(genderName) {
    const id = uuid();
    await Gender.create({
        id,
        name: genderName
    })
}

async function getGenres (req, res) {
    try {
        let genresDB = await Gender.findAll();
        if (!genresDB[0]){
            const genresAPI = await axios.get(`${API_GENRES}?key=${API_KEY}`);
            await Promise.all(genresAPI.data.results.map(async (g) => {
                await createGender(g.name);
                }))
            genresDB = await Gender.findAll();
        }
        return res.json(genresDB);       
    } catch (error) {
        return res.status(400).send('An error has ocurred');
    }
}

module.exports = {
    getGenres
}