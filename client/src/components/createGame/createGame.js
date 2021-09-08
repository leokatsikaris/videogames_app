import React from 'react';
import { useState } from 'react';

const genres = ["Indie", "Adventure", "Strategy", "Shooter", "Puzzle", "Arcade", "Platformer", "Racing", "Massively Multiplayer", "Sports", "Fighting", "Family", "Board Games", "Educational", "Card", "Simulation", "Casual", "RPG", "Action"].sort();

const platforms = ["Playstation 3", "Playstation 4", "Playstation 5", "Nintendo Switch", "Xbox One", "PC", "Xbox 360", "Xbox Series S/X", "macOS", "Linux", "Android", "iOS", "Xbox", "PS Vita", "Web"].sort();


export function CreateGame () {

    const [input, setInput] = useState({
        name: "",
        description: "",
        release_date: "",
        rating: "",
        genres: [],
        platforms: []
      })

      const handleCheckboxChange = function(e){
        setInput({
          ...input, [e.target.name]: input[e.target.name].concat(e.target.value)
        })
      }
    
      const handleChange = function (e){
        setInput({
          ...input, [e.target.name] : e.target.value 
        })
      }
      
      const handleSubmit = function(e){
        e.preventDefault();
        setInput("");
      }

    return (
        <div>
            <form onSubmit={handleSubmit} action='http://localhost:3001/videogame' method='post'>
                <label>Name: </label>
                <input 
                name='name'
                value={input.name}
                placeholder='Insert a name'
                onChange={handleChange} />
                <br />
                <label>Description: </label>
                <input 
                name='description' 
                value={input.description} 
                placeholder='Insert a description'
                onChange={handleChange} />
                <br />
                <label>Released date: </label>
                <input 
                name='released_date' 
                value={input.released_date}
                placeholder='Insert a date'
                 />
                <br />
                <label>Rating: </label>
                <input 
                name='rating' 
                value={input.rating} 
                placeholder='Insert rating'
                onChange={handleChange}/>
                <br />
                <label>Gender: {genres.map(g => {
                    return <label>
                      <input
                      name='genres'
                      type="checkbox" 
                      value={input.genres}
                      onClick={handleCheckboxChange}
                      />{g}</label>
                })}</label>
                <br />
                <label>Platform/s: {platforms.map(p => {
                    return <label>
                      <input 
                      name='platforms' 
                      type="checkbox" 
                      value={input.platforms}
                      onClick={handleCheckboxChange}
                      />{p}</label>
                })}</label>
                <br />
                <button type="submit">Create game</button>
            </form>
        </div>
    )
}