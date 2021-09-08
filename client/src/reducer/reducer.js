const initialState = {
    games: [],
    gameDetail: [],
    gamesByName: []
  };
  
  function rootReducer(state = initialState, action) {
    if (action.type === "GET_GAMES") {
        return {
            ...state.games,
            games: action.payload
        }
    }
    if (action.type === "GET_GAMES_BY_NAME") {
        return {
            ...state.gamesByName,
            gamesByName: action.payload
        }
    }
    
    if (action.type === "GET_GAME_DETAIL") {
        return {
            ...state.gameDetail,
            gameDetail: action.payload
        };
    }
    // if (action.type === "ADD_GAME"){
    //     return {
    //         gameAdded: action.payload
    //     };
    // }
    return state;
  }
  
  export default rootReducer;