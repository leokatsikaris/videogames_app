import { Videogame } from '../videogame/videogame';
import React from 'react';
// import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { connect } from 'react-redux';
// import { getGames } from '../../../actions/actions';


export function Videogames() {
    // const dispatch = useDispatch();
    var videogames = useSelector(state => state.games);

    // useEffect(() => {
    //     dispatch(getGames())
    // }, [dispatch]);
    console.log(videogames);

    return (
        <div>
            <select>
                <option>Order by name: A-Z</option>
                <option>Order by name: Z-A</option>
                <option>Order by rating: highest to lowest</option>
                <option>Order by rating: lowest to highest</option>

            </select>

            {videogames && videogames.map((v) => {
                return <Videogame 
                id={v?.id}
                name={v?.name} 
                background_image={v?.background_image}
                genres={v.genres}
                />
            })}
        </div>
    )
}