import React from 'react';
import { Link } from 'react-router-dom';
import styles from './videogame.module.css';

export function Videogame({id, name, background_image, genres}) {
    return (
        <div className={styles.game}>
            <div className={styles.image}><img src={background_image} alt=''/></div>
            <div className={styles.detail}>
            <Link 
            to={`/videogame/${id}`} 
            style={{ textDecoration: 'none'}}>
            <h3>{name}</h3> 
            </Link>
            <div className={styles.divGenres}>Genres: </div>
            {genres.map(g => {
                return <p key={g.id}>{g.name}</p>
            })}
            </div>
        </div>
    )
}