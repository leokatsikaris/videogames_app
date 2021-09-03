import { Videogame } from '../videogame/videogame';
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';


export function Videogames() {
    return (
        <div>

            <Link to='/videogame/:idVideogame'>Videogame</Link>
            {/* <Videogame /> */}
        </div>
    )
}