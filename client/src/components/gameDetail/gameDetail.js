import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGameDetail } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import styles from './gameDetail.module.css';

export function GameDetail() {
    const dispatch = useDispatch();
    const { idVideogame } = useParams();
    var gameDetail = useSelector(state => state.gameDetail);

    useEffect(() => {
        dispatch(getGameDetail(idVideogame))
        // setLoading(true);
    }, [dispatch, idVideogame])

    let platformsShowed = [];
    
    
    // IGUALO LAS PROPIEDADES DE LOS JUEGOS CREADOS Y DE LOS JUEGOS DE LA API
    
    if (gameDetail?.db){
        gameDetail.background_image = 'https://i.pinimg.com/736x/b3/6b/7c/b36b7c9c4ad5e3d20e302d6216623091.jpg';
        gameDetail.genres = gameDetail.Genders;
        gameDetail.platforms.map(p => platformsShowed.push(p));
    } else {
        gameDetail?.platforms?.map(p => platformsShowed.push(p.platform.name))
    }
    

        return (
            <div className={styles.component}>
                <img src={gameDetail?.background_image} alt=''/>
                <p className={styles.pTitle}>Name:</p> 
                <p>{gameDetail?.name}</p>
                <p className={styles.pTitle}>About:</p> 
                <p>{gameDetail?.description_raw}</p>
                <p className={styles.pTitle}>Released: </p>
                <p>{gameDetail?.released}</p>
                <p className={styles.pTitle}>Rating: </p>
                <p>{gameDetail?.rating}</p>
                <p className={styles.pTitle}>Gender/genres: </p>
                {gameDetail?.genres?.map(g => <p>{g.name}</p>)}
                <p className={styles.pTitle}>Platform/s: </p>
                {platformsShowed?.map(p => <p>{p}</p>)}
            </div>
        )

}