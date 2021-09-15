import { Videogame } from '../videogame/videogame';
import React from 'react';
import styles from './videogames.module.css';


export function Videogames({ videogames, loading }) {

    if (loading){
        return (
            <h2 className={styles.loading}>Loading...</h2>
        )
    }


    return (
        <div className={styles.gameContainer}>
            <div className={styles.games}>
            {videogames && videogames.map((v) => {
                if (v?.db){
                    v.background_image = 'https://img2.freepng.es/20190529/zlr/kisspng-video-games-game-controllers-vector-graphics-joyst-gamepad-free-tools-and-utensils-icons-epicgaming-5ceef84f10d138.0867366015591650070689.jpg';
                    v.genres = v.Genders; 
                }
                return <Videogame 
                key={v?.id}
                id={v?.id}
                name={v?.name} 
                background_image={v?.background_image}
                genres={v.genres}
                />
            })}
            </div>
        </div >
    )
}