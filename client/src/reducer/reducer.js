const initialState = {
    games: [],
    gamesByName: [],
    gameDetail: []
  };
  
  function rootReducer(state = initialState, action) {
    if (action.type === "GET_GAMES") {
        return {
            ...state.games,
            games: state.games.concat(action.payload) 
        }
    }
    if (action.type === "GET_GAMES_BY_NAME") {
    }
    
    if (action.type === "GET_GAME_DETAIL") {
        return {
            gameDetail: [...state.gameDetail, state.gameDetail]
        };
    }
    if (action.type === "GET_GAMES_DB"){
        return {
        };
    }
    return state;
  }
  
  export default rootReducer;