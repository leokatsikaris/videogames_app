import './App.css';
import React from 'react';
import { Route } from "react-router-dom";
import { Home } from '../src/components/home/index';
import { Landing } from '../src/components/landing/landing';
import { GameDetail } from '../src/components/gameDetail/gameDetail';
import { About } from '../src/components/navbar/about/about';
import { CreateGame } from '../src/components/createGame/createGame';
import { GameByName } from '../src/components/gamesByName/gamesByName';
import { Navbar } from '../src/components/navbar/navbar';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { getGames } from './actions/actions';

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //     dispatch(getGames())
  // }, [dispatch]);

  return (
    <div className="App">
      <h1>Henry Videogames</h1>
      <Route exact path="/" component={Landing} />
      <Route path='/home' render={props => <>
      <Navbar />
      <Home />
      </> } />
      <Route path='/videogame/:idVideogame' render={props => <>
      <Navbar />
      <GameDetail />
      </> } />
      <Route path='/about' render={props => <>
      <Navbar />
      <About />
      </> } />
      <Route path='/create_game' render={props => <>
      <Navbar />
      <CreateGame />
      </> } />
      <Route path='/videogames/:nameSearched' render={props => <>
      <Navbar />
      <GameByName />
      </> } />
    </div>
  );
}

export default App;
