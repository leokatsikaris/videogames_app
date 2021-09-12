import React, { useEffect, useState } from 'react';
import { Videogames }  from './videogames/videogames';
// import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getGames } from '../../actions/actions';
import { useParams } from 'react-router-dom';
// import { Loading } from '../loading/loading';
import { Pagination } from '../home/pagination/pagination';
import axios from 'axios';


export function Home() {
    const dispatch = useDispatch();
    // var loading = useSelector(state => state.loading);
    let [videogames, setVideogames] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage, setGamesPerPage] = useState(15);
    // const videogames = useSelector(state => state.games);
    const { attribute, order } = useParams();

    useEffect(() => {
        const fetchAPI = async () => {
          setLoading(true);
          const resultGames = await axios.get('http://localhost:3001/videogames');
          setVideogames(resultGames.data);
          setLoading(false);
        };
        fetchAPI();
      }, []);

    console.log(videogames);
    
    // PARA PAGINAR ----------------------------------------------------------

    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGames = videogames.slice(indexOfFirstGame, indexOfLastGame);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // PARA ORDENAR  --------------------------------------------------------

    // if (attribute === 'name' && order === 'asc'){
    //     videogames = videogames.sort(function (a, b) {
    //         if (a.name > b.name) {
    //           return 1;
    //         }
    //         if (a.name < b.name) {
    //           return -1;
    //         }
    //         return 0;
    //       });
    //     //ordenar alfabeticamente de A a Z 
    // } else if (attribute === 'name' && order === 'desc'){
    //     videogames = {};
    //     // ordenar alfabeticamente de la Z a la A
    // } else if (attribute === 'rating' && order === 'asc'){
    //     videogames = [];
    //     // ordenar por rating del menor a mayor
    // } else if (attribute === 'rating' && order === 'desc'){
    //    videogames = [];
    // }

    return (
        <div>
            <h1>Home</h1>
            <select>
                <option>Order by name: A-Z</option>
                <option>Order by name: Z-A</option>
                <option>Order by rating: highest to lowest</option>
                <option>Order by rating: lowest to highest</option>
            </select>
            <Videogames videogames={currentGames} loading={loading}/>
            <Pagination gamesPerPage={gamesPerPage} totalGames={videogames.length} paginate={paginate} />
        </div>
    )
}