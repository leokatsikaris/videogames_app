import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getGamesByName } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';

export function GameByName() {
    const dispatch = useDispatch();
    const { nameSearched } = useParams();
    var gamesByName = useSelector(state => state.gamesByName);

    useEffect(() => {
        dispatch(getGamesByName(nameSearched))
    }, [dispatch, nameSearched])

    return (
        <div>
           {gamesByName && gamesByName.map(g => {
               return( 
               <div>
                   <img src={g?.background_image} alt=""/>
                   <p>Name: {g?.name}</p>
               </div>)
           })}
            
        </div>
    )
}