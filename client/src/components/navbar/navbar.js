import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar () {
    return (
        <nav>
            <h3><Link to ='/home'>Home</Link></h3>
            <h3><Link to ='/create_game'>Create a game</Link></h3>
            <h3><Link to='/about'>About</Link></h3>
        </nav>
    )
}