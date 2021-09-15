import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Videogames } from '../home/videogames/videogames';
import { Link } from 'react-router-dom';
import styles from './myGames.module.css';


export function MyGames () {
    let [myGames, setMyGames] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchAPI = async () => {
            setLoading(true);
            let resultGames = await axios.get('http://localhost:3001/videogames');
            setMyGames(resultGames.data);
            setLoading(false);
        };
        fetchAPI();
    }, []);
    
    if (loading) {
        return <h2 className={styles.text}> Loading ... </h2>
    }

    let gamesDB = []
    
    myGames.map(g => {
       if (g.db) gamesDB.push(g);
    })

    
    if (!gamesDB[0]){
          return (
              <div>
                  <h2 className={styles.text}>Not games created</h2>
                  <Link to='/home' className={styles.text}>Back to Home</Link>
              </div>
          )
      } else {
          return (
            <Videogames videogames={gamesDB} loading={loading} /> 
        )
      }
}