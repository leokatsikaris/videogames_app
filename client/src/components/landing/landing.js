import React from 'react';
import { Link } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { getGames } from '../../actions/actions';

export function Landing() {
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getGames())
    // }, [dispatch]);

    return (
        <div>
            <Link to='/home'>Enter</Link>
        </div>
    )
}