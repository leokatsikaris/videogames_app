import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getGamesByName } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../home/videogame/videogame.module.css';

export function GameByName() {
    const dispatch = useDispatch();
    const { nameSearched } = useParams();
    
    useEffect(() => {
        dispatch(getGamesByName(nameSearched))
    }, [dispatch, nameSearched])

    // var errors = useSelector(state => state.errors);
    var gamesByName = useSelector(state => state.gamesByName);

    if (!gamesByName){
        return (
            <div>
                <h2>Videogame not found</h2>
                <br />
                <Link to='/home'><h2>Return to Home</h2></Link>
            </div>
        )
    } else {
        return (
            <div>
               {gamesByName && gamesByName.map(g => {
                   return( 
                   <div className={styles.imgWrapper} className={styles.gameBox}>
                       <img src={g?.background_image} alt="" className={styles.imgFixer}/>
                       <p><Link to={`/videogame/${g.id}`}>{g?.name}</Link></p>
                       <div >Genres: </div>
                        {g?.genres.map(g => {
                            return <p key={g.id}>{g.name}</p>
                        })}
                   </div>)
               })}
                
            </div>
        )
    }
}