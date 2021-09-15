import React, { useEffect, useState } from 'react';
import { Videogames }  from '../home/videogames/videogames';
import { Link, useParams } from 'react-router-dom';
import { Pagination } from '../home/pagination/pagination';
import axios from 'axios';
import styles from './genresFilter.module.css';

export function GenresFilter () {
    let [videogames, setVideogames] = useState([]);
    const { gender } = useParams();
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage] = useState(15);


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
        if (v.Genders) {
            v.Genders.map(g => {
                if (v === gender) gamesFiltered.push(v);
            })
        }else {
            v.genres.map(gen => {
                if (gen.name === gender) gamesFiltered.push(v); 
            })
        } 
    })
        

          // PARA PAGINAR ----------------------------------------------------------

        const indexOfLastGame = currentPage * gamesPerPage;
        const indexOfFirstGame = indexOfLastGame - gamesPerPage;
        const currentGames = gamesFiltered.slice(indexOfFirstGame, indexOfLastGame);

        const paginate = (pageNumber) => setCurrentPage(pageNumber);

        return (
            <div>
                <h2 className={styles.stylesTitle}>All {gender} games</h2>
                <Videogames videogames={currentGames} loading={loading}/>
                <Pagination gamesPerPage={gamesPerPage} totalGames={videogames.length} paginate={paginate} />
                <Link to='/home'><h2>Back to Home</h2></Link>
            </div>
        )
}