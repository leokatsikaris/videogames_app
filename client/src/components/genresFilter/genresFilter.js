import React, { useEffect, useState } from 'react';
import { Videogames }  from '../home/videogames/videogames';
import { Link, useParams, useHistory } from 'react-router-dom';
import { Pagination } from '../home/pagination/pagination';
import axios from 'axios';
import { useSelector } from 'react-redux';

export function GenresFilter () {
    let [videogames, setVideogames] = useState([]);
    const { gender } = useParams();
    const genres = useSelector(state => state.genres);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage, setGamesPerPage] = useState(15);


    useEffect(() => {
        const fetchAPI = async () => {
          setLoading(true);
          let resultGames = await axios.get('http://localhost:3001/videogames');
          setVideogames(resultGames.data);
          setLoading(false);
        };
        fetchAPI();
      }, []);

      let gamesFiltered = [];


    videogames.map(v => {
        if (v.Genders?.includes(gender)) {
            return v
        }else {
            v.genres.map(gen => {
                if (gen.name === gender) gamesFiltered.push(v); 
            })
        } 
    })

    // console.log(gamesFiltered);
        

          // PARA PAGINAR ----------------------------------------------------------

        const indexOfLastGame = currentPage * gamesPerPage;
        const indexOfFirstGame = indexOfLastGame - gamesPerPage;
        const currentGames = gamesFiltered.slice(indexOfFirstGame, indexOfLastGame);

        const paginate = (pageNumber) => setCurrentPage(pageNumber);

        return (
            <div>
                <h2>All {gender} games</h2>
                <Videogames videogames={currentGames} loading={loading}/>
                <Pagination gamesPerPage={gamesPerPage} totalGames={videogames.length} paginate={paginate} />
                <Link to='/home'><h2>Back to Home</h2></Link>
            </div>
        )
}