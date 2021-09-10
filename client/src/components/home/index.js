import React, { useEffect } from 'react';
import { Videogames }  from './videogames/videogames';
// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getGames } from '../../actions/actions';


export function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGames())
    }, [dispatch]);

    return (
        <div>
            <h1>Home</h1>
            <Videogames />
        </div>
    )
}