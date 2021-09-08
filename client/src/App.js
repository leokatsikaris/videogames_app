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

function App() {
  return (
    <div className="App">
      <h1>Henry Videogames</h1>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Home} />
      <Route path="/videogame/:idVideogame" component={GameDetail} />
      <Route path="/about" component={About} />
      <Route path="/create_game" component={CreateGame} />
      <Route path="/videogames/:nameSearched" component={ GameByName }/>
    </div>
  );
}

export default App;
