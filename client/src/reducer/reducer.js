const initialState = {
    games: [],
    gamesByName: [],
    gameDetail: []
  };
  
  function rootReducer(state = initialState, action) {
    if (action.type === "GET_GAMES") {
        return {
            // ...games,
            // games: action.payload
        }
    }
    if (action.type === "GET_GAMES_BY_NAME") {
    }
    
    if (action.type === "GET_GAME_DETAIL") {
        return {
        };
    }
    return state;
  }
  
  export default rootReducer;