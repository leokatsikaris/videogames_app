import React, { useState }from 'react';
import { useHistory } from "react-router-dom";


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
            onChange={handleChange}/>
            <button 
            onClick={handleClick}>Search</button> 
        </div>
    )
}