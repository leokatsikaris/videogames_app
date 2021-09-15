import React, { useState }from 'react';
import { useHistory } from "react-router-dom";
import styles from './search.module.css';


export function Search() {
    const history = useHistory();

    const [input, setInput] = useState({
        name: ""
      })

    const handleChange = function (e){
        setInput({
         ...input, name: e.target.value 
        })
      }

    const handleClick = function() {
        history.push(`/videogames/${input.name}`);
    }

    return (
        <div>
            <input 
            type='text' 
            name='name' 
            value= {input.name}
            placeholder='Insert a name'
            className={styles.text}
            onChange={handleChange}/>
            <button 
            className={styles.text}
            onClick={handleClick}>Search</button> 
        </div>
    )
}