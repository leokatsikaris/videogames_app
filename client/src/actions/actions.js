
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
}