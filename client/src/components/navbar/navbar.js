import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from './search/search';

export function Navbar () {
    return (
        <nav>
            <ul>
            <li><h3><Link to ='/home'>Home</Link></h3></li>
            <li><h3><Link to ='/create_game'>Create a game</Link></h3></li>
            <li><h3><Link to='/about'>About</Link></h3></li>
            <li><Search /></li>
            </ul>
        </nav>
    )
}