import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getGameDetail } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';

export function GameDetail() {
    const dispatch = useDispatch();
    const { idVideogame } = useParams();
    var gameDetail = useSelector(state => state.gameDetail);

    useEffect(() => {
        dispatch(getGameDetail(idVideogame))
    }, [dispatch, idVideogame])

    gameDetail = new Array(gameDetail);
     
    return (
        <div>
           {gameDetail && gameDetail.map(g => {
               return( 
               <div key='0'>
                   <img key='1'src={g?.background_image} alt=""/>
                   <p key='2'>Name: {g?.name}</p>
                   <p key='3'>About: {g?.description_raw} </p>
                   <p key='4'>Released date: {g?.released}</p>
                   <p key='5'>Rating: {g?.rating}</p>
                   <ul>Platforms: {g?.platforms.map(p => {
                       return <li key={p.id}>{p.platform.name}</li>
                   })}</ul>
                    <ul>Genres: {g?.genres.map(gen => {
                       return <li key={gen.id * 2}>{gen.name}</li>
                   })}</ul>
               </div>)
           })}
            
        </div>
    )
}