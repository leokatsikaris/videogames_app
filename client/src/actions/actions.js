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

export function getGamesByName() {
}
  
export function getGameDetail(id) {
        return function(dispatch){
        return axios.get(`http://http://localhost:3001/videogame/${id}`)
        .then ((game) => {
            dispatch({
                type: 'GET_GAME_DETAIL',
                payload: game.data
            })
        })
    }
}

export function getGamesDB(id) {

}