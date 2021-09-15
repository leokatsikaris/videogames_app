const initialState = {
    // games: [],
    gameDetail: [],
    gamesByName: [],
    gameAdded: [],
    genres: [],
    loading: true
  };
  
  function rootReducer(state = initialState, action) {
    // if (action.type === "GET_GAMES") {
    //     return {
    //         ...state.games,
    //         games: action.payload
    //     }
    // }
    if (action.type === "GET_GAMES_BY_NAME") {
        return {
            ...state.gamesByName,
            gamesByName: action.payload
        }
    }
    if (action.type === "GET_GAME_DETAIL") {
        // console.log(action.payload);
        return {
            ...state.gameDetail,
            gameDetail: action.payload
        };
    }
    if (action.type === "ADD_GAME") {
        return {
            ...state.gameAdded,
            gameAdded: action.payload
        }
    }
    if (action.type === "GET_GENRES") {
        return {
            // ...state.genres,
            genres: action.payload
        }
    }
    
    return state;
  }
  
  export default rootReducer;