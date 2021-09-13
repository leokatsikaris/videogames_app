import { Videogame } from '../videogame/videogame';
import React from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { connect } from 'react-redux';
// import { getGames } from '../../../actions/actions';
// import { Pagination } from '../pagination/pagination';


export function Videogames({ videogames, loading }) {
    // let videogames = useSelector(state => state.games);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [gamesPerPage, setPostsPerPage] = useState(15);
    // let currentGames = []

    // const indexOfLastGame = currentPage * gamesPerPage;
    // const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    // if (videogames) {
    //     var currentGames = videogames && videogames.slice(indexOfFirstGame, indexOfLastGame);
    // }

    if (loading){
        return (
            <h2>Loading...</h2>
        )
    }

    return (
        <div>
            {videogames && videogames.map((v) => {
                if (v.db){
                    v.background_image = 'https://img2.freepng.es/20190529/zlr/kisspng-video-games-game-controllers-vector-graphics-joyst-gamepad-free-tools-and-utensils-icons-epicgaming-5ceef84f10d138.0867366015591650070689.jpg';
                    v.genres = v.Genders; 
                }
                return <Videogame 
                key={v.id}
                id={v?.id}
                name={v?.name} 
                background_image={v?.background_image}
                genres={v.genres}
                />
            })}
        </div>
    )
}