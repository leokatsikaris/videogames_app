import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getGamesByName } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Videogames } from '../home/videogames/videogames';  

export function GameByName() {
    const dispatch = useDispatch();
    const { nameSearched } = useParams();
    var gamesByName = useSelector(state => state.gamesByName);
    // const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        dispatch(getGamesByName(nameSearched))
    }, [dispatch, nameSearched])


    if (!gamesByName){
        return (
            <div>
                <h2>Videogame not found</h2>
                <br />
                <Link to='/home'><h2>Back to Home</h2></Link>
            </div>
        )
    } else {
        return (
            <div>
               <Videogames videogames={gamesByName} />
                
            </div>
        )
    }
}