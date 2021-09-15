import React , { useEffect, useState } from 'react';
import { Videogames }  from './videogames/videogames';
import { useDispatch} from 'react-redux';
import { getGenres } from '../../actions/actions';
import { useParams, useHistory } from 'react-router-dom';
// import { Loading } from '../loading/loading';
import { Pagination } from '../home/pagination/pagination';
import axios from 'axios';
import styles from './home.module.css';

// LOS GÉNEROS PARA EL SELECT DEL FILTER 

const genres = ["Indie", "Adventure", "Strategy", "Shooter", "Puzzle", "Arcade", "Platformer", "Racing", "Massively Multiplayer", "Sports", "Fighting", "Family", "Board Games", "Educational", "Card", "Simulation", "Casual", "RPG", "Action"].sort();


export function Home() {
    const history = useHistory();
    const dispatch = useDispatch();
    let [videogames, setVideogames] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage] = useState(15);
    const { attribute, order } = useParams();

    useEffect(() => {
        const fetchAPI = async () => {
          setLoading(true);
          const resultGames = await axios.get('http://localhost:3001/videogames');
          await setVideogames(resultGames.data);
          setLoading(false);
        };
        dispatch(getGenres());
        fetchAPI();
      }, [dispatch]);

    
    // PARA ORDENAR  --------------------------------------------------------

    if (attribute === 'name' && order === 'asc'){
        //ordenar alfabeticamente de A a Z 
        videogames = videogames.sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          });
    } else if (attribute === 'name' && order === 'desc'){
        // ordenar alfabeticamente de la Z a la A
        videogames = videogames.sort(function (a, b) {
            if (b.name > a.name) {
              return 1;
            }
            if (b.name < a.name) {
              return -1;
            }
            return 0;
          });
    } else if (attribute === 'rating' && order === 'asc'){
        // ordenar por rating del menor a mayor
        videogames = videogames.sort(((a, b) => a.rating - b.rating));
    } else if (attribute === 'rating' && order === 'desc'){
        // ordenar por rating de mayor a menor 
        videogames = videogames.sort(((a, b) => b.rating - a.rating));
    }

    // HANDLER DEL SELECT DE ORDERS
    const handleOrderSelect = function(order) {
        order = order.split(' ');
         history.push(`/home/${order[0]}/${order[1]}`);
    }

    // HANDLER DEL SELECT DE GENRES FILTER
    const handleGenderSelect = function(gender){
      history.push(`/gender/${gender}`);
    }

    // PARA PAGINAR ----------------------------------------------------------

    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGames = videogames.slice(indexOfFirstGame, indexOfLastGame);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    

    return (
        <div >
            <h1 className={styles.homeTitle}>The Game Club</h1>
            <select onChange={(e) => handleOrderSelect(e.target.value)}>
                <option disabled selected hidden>Select order...</option>
                <option value={'name asc'}>Order by name: A-Z</option>
                <option value={'name desc'}>Order by name: Z-A</option>
                <option value={'rating desc'} onChange={(e) => handleOrderSelect(e.target.name, e.target.value)}>Order by rating: highest to lowest</option>
                <option value={'rating asc'}>Order by rating: lowest to highest</option>
            </select>
            <select onChange={(e) => handleGenderSelect(e.target.value)}>
              <option disabled selected hidden> Filter by gender...</option>
              {genres.map(g => <option value={g}>{g}</option>)}
            </select>
            <Videogames videogames={currentGames} loading={loading}/>
            <Pagination gamesPerPage={gamesPerPage} totalGames={videogames.length} paginate={paginate} />
        </div>
    )
}