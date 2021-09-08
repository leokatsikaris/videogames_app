import { Videogame } from '../videogame/videogame';
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { connect } from 'react-redux';
import { getGames } from '../../../actions/actions';


export function Videogames() {
    const dispatch = useDispatch();
    var videogames = useSelector(state => state.games);

    useEffect(() => {
        dispatch(getGames())
    }, [dispatch]);

    return (
        <div>
            {videogames && videogames.map((v) => {
                return <Link to={`/videogame/${v?.id}`}> <Videogame 
                name={v?.name} 
                background_image={v?.background_image}

                /> </Link>
            })}
        </div>
    )
}