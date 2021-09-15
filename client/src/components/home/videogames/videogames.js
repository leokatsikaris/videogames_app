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
                    v.background_image = 'https://i.pinimg.com/736x/b3/6b/7c/b36b7c9c4ad5e3d20e302d6216623091.jpg';
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