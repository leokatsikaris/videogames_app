import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGameDetail } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';

export function GameDetail() {
    const dispatch = useDispatch();
    const { idVideogame } = useParams();
    // const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        dispatch(getGameDetail(idVideogame))
    }, [dispatch, idVideogame])
    
    var gameDetail = useSelector(state => state.gameDetail);
    gameDetail = new Array(gameDetail);
     
    return (
        <div>
           {gameDetail && gameDetail.map(g => {
               return( 
               <div>
                   <img src={g?.background_image} alt=""/>
                   <p>Name: {g?.name}</p>
                   <p>About: {g?.description_raw} </p>
                   <p>Released date: {g?.released}</p>
                   <p >Rating: {g?.rating}</p>
                   <ul>Platforms: {g?.platforms.map(p => {
                       return <li key={p.id}>{p.platform.name}</li>
                   })}</ul>
                    <ul>Genres: {g?.genres.map(gen => {
                       return <li key={gen}>{gen.name}</li>
                   })}</ul>
               </div>)
           })}
            
        </div>
    )
}