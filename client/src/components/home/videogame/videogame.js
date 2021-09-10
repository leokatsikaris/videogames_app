import React from 'react';
import { Link } from 'react-router-dom';

export function Videogame({id, name, background_image, genres}) {
    return (
        <div>
            <Link to={`/videogame/${id}`}><p >{name}</p> </Link>
            <img src={background_image} alt=''/>
            <ul >Genres: {genres.map(g => {
                return <li key={g.id}>{g.name}</li>
            })}

            </ul>
        </div>
    )
}