import axios from 'axios';

export function getGames() {
    return function (dispatch) {
        return axios.get('http://localhost:3001/videogames')
        .then((games) => {
            dispatch ({
                type: 'GET_GAMES',
                payload: games.data
            })
        })
    }
}

export function getGamesByName(nameSearched) {
    return function (dispatch) {
        return axios.get(`http://localhost:3001/videogames?name=${nameSearched}`)
        .then((games) => {
            dispatch ({
                type: 'GET_GAMES_BY_NAME',
                payload: games.data
            })
        })
    }
}
  
export function getGameDetail(idVideogame) {
    return function(dispatch){
        return axios.get(`http://localhost:3001/videogame/${idVideogame}`)
        .then ((game) => {
            dispatch({
                type: 'GET_GAME_DETAIL',
                payload: game.data
            }) 
        })
    }
}

export function addGame(body) {
    return function(dispatch){
        return axios.post('http://localhost:3001/videogame', body)
        .then ((game) => {
            dispatch({
                type: 'ADD_GAME',
                payload: game.data
            })
        })
    }
}

export function getGenres(){
    return function(dispatch){
        return axios.get('http://localhost:3001/genres')
        .then((genres) => {
            dispatch({
                type: 'GET_GENRES',
                payload: genres.data
            })
        })
    }
}