import React from 'react';
import { useEffect } from 'react';
// import axios from 'axios';
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
               <div>
                   <img src={g?.background_image} alt=""/>
                   <p>Name: {g?.name}</p>
                   <p>About: {g?.description}</p>
                   <p>Released date: {g?.released}</p>
                   <p>Rating: {g?.rating}</p>
                   {/* <ol>Platforms: {g?.platforms.map(p => {
                       return <li>{p.platform.name}</li>
                   })}</ol> */}
               </div>)
           })}
            
        </div>
    )
}