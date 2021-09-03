import React from 'react';

export function Videogame({name, background_image}) {
    return (
        <div>
            <p>{name}</p>
            <img src={background_image} alt=''/>
        </div>
    )
}