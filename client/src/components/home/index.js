import React from 'react';
import { Search } from './search/search';
import { Videogames } from './videogames/videogames';
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to= '/about'> About </Link>
            <Search/> 
            <Link to= '/create_game'>Create a game</Link>
            <Videogames />
        </div>
    )
}