require ('dotenv').config();
const API_KEY = process.env.API_KEY;
const API_GAME = 'https://api.rawg.io/api/games';
const API_GENRES = 'https://api.rawg.io/api/genres';

module.exports = {
    API_KEY,
    API_GAME,
    API_GENRES
}
