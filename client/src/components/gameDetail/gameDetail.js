import React from 'react';
import { useState, useEffect } from 'react';
// import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getGameDetail } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';

export function GameDetail() {
    // const dispatch = useDispatch();
    // const {id} = useParams();
    // var gameDetail = useSelector(state => state.gameDetail);

    // useEffect(() => {
    //     dispatch(getGameDetail(gameDetail.id))
    // }, [])

    return (
        <div>
           {/* {gameDetail.map(g => {
               return( 
               <div>
                   <p>Name: {g?.name}</p>
                   <p>Released date: {g?.released}</p>
                   <p>Rating: {g?.rating}</p>
                   <ol>Platforms: {g?.platforms.map(p => {
                       return <li>{p.platform.name}</li>
                   })}</ol>
               </div>)
           })}
             */}
        </div>
    )
}