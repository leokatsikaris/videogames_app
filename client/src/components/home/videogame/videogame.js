import React from 'react';
import { Link } from 'react-router-dom';
import styles from './videogame.module.css';

export function Videogame({id, name, background_image, genres}) {
    return (
        <div className={styles.imgWrapper} className={styles.gameBox}>
            <img src={background_image} alt='' className={styles.imgFixer}/>
            <Link to={`/videogame/${id}`}><p>{name}</p> </Link>
            <div >Genres: </div>
            {genres.map(g => {
                return <p key={g.id}>{g.name}</p>
            })}
        </div>
    )
}