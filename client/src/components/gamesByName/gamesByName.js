import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getGamesByName } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';

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
                   <div>
                       <img src={g?.background_image} alt=""/>
                       <p><Link to={`/videogame/${g.id}`}>{g?.name}</Link></p>
                   </div>)
               })}
                
            </div>
        )
    }
}