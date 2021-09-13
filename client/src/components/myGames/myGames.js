import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Videogames } from '../home/videogames/videogames';
import { Link } from 'react-router-dom';


export function MyGames () {
    let [myGames, setMyGames] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // const fetchAPI = async () => {
        //   setLoading(true);
        //   const resultGames = await axios.get('http://localhost:3001/videogames');
        //   const resultMyGames = await resultGames.data.map(g => {
        //       if (g.db) return g; 
        //   })
        //   setMyGames(resultMyGames);
        //   setLoading(false);
        // };
        // fetchAPI();

      }, []);

      if (!myGames[0]){
          return (
              <div>
                  <h2>Not games created</h2>
                  <Link to='/home'>Back to Home</Link>
              </div>
          )
      } else {
          return (
            <Videogames videogames={myGames} loading={loading} /> 
        )
      }
}