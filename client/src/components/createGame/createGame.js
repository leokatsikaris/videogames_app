import React from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

const genres = ["Indie", "Adventure", "Strategy", "Shooter", "Puzzle", "Arcade", "Platformer", "Racing", "Massively Multiplayer", "Sports", "Fighting", "Family", "Board Games", "Educational", "Card", "Simulation", "Casual", "RPG", "Action"].sort();

const platforms = ["Playstation 3", "Playstation 4", "Playstation 5", "Nintendo Switch", "Xbox One", "PC", "Xbox 360", "Xbox Series S/X", "macOS", "Linux", "Android", "iOS", "Xbox", "PS Vita", "Web"].sort();

function validate(input){
  let errors = {};
  if(!input.name){
    errors.name =  "Name required";
  }
  if (!input.description){
    errors.description = "Description required";
  }
  if (!input.platforms[0]){
    errors.platforms = "Platform/s required"
  }
  return errors; 
}


export function CreateGame () {

  const history = useHistory();

  const [error, setError] = useState({});

    const [input, setInput] = useState({
        name: "",
        description: "",
        release_date: "",
        rating: "",
        genres: [],
        platforms: []
      })

      // const handleCheckboxChange1 = function(e){
      //   if (e.target.checked){
      //     setInput({
      //       ...input,
      //       genres: [...input.genres, e.target.value]
      //     })
      //   }
      // }
      
      // const handleCheckboxChange2 = function(e){
      //   if (e.target.checked){
      //     setInput({
      //       ...input,
      //       platforms: [...input.platforms, e.target.value]
      //     })
      //   }
      // }

      const handleSelect1 = function (e){
        setInput({
          ...input,
          genres: [...input.genres, e.target.value]
        })
      }

      const handleSelect2 = function (e){
        setInput({
          ...input,
          platforms: [...input.platforms, e.target.value]
        })
      }
    
      const handleChange = function (e){
        setInput({
          ...input, 
          [e.target.name] : e.target.value 
        })
        setError(validate({
          ...input,
          [e.target.name]: e.target.value
        }))
      }
      
      const handleSubmit = function(e){
        e.preventDefault();
        setInput({
        name: "",
        description: "",
        release_date: "",
        rating: "",
        genres: [],
        platforms: []
        });
        alert('New videogame created successfully');
        history.push('/home')

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
                 {error.name && (
                  <p>{error.name}</p>
                )}
                <br />
                <br />
                <label>Description: </label>
                <br />
                <textarea 
                name='description' 
                value={input.description} 
                placeholder='Insert a description'
                onChange={handleChange} 
                onKeyUp={handleChange}
                onBlur={handleChange}
                />
                {error.description && (
                  <p>{error.description}</p>
                )}
                <br />
                <br />
                <label>Released date: </label>
                <input 
                name='released_date' 
                value={input.released_date}
                placeholder='Insert a date'
                onChange={handleChange} />
                <br />
                <br />
                <label>Rating: </label>
                <input 
                name='rating' 
                value={input.rating} 
                placeholder='For example: 3.0'
                onChange={handleChange}/>
                <br />
                <br />
                <label>Gender/genres:</label>
                <br />
                <select onChange={handleSelect1}>
                  <option disabled selected hidden>Select at least one gender...</option>
                  {genres.map(g => {
                    return <option value={g}>{g}</option>
                  })}
                </select>
                <ul>
                  <li>{input.genres.map(el => el + ", ")}</li>
                </ul>
                <br />
                <br />
                <label>Platform/s:</label>
                <br />
                <select onChange={handleSelect2}>
                  <option disabled selected hidden>Select at least one platform...</option>
                  {platforms.map(p => {
                    return <option value={p}>{p}</option>
                  })}
                </select>
                <ul>
                  <li>{input.platforms.map(el => el + ", ")}</li>
                </ul>
                {error.platforms && (
                  <p>{error.platforms}</p>
                )} 
                {/* <label>Gender: </label>
                <br />
                {genres.map(g => {
                    return <label>
                      <input
                      name='genres'
                      type="checkbox" 
                      value={g}
                      onClick={handleCheckboxChange1}
                      />{g}</label>
                })}
                <br />
                <br />
                <label>Platform/s:</label>
                <br />
                {platforms.map(p => {
                    return <label>
                      <input 
                      name='platforms' 
                      type="checkbox" 
                      value={p}
                      onClick={handleCheckboxChange2}
                      />{p}</label>
                })}
                 {error.platforms && (
                  <p>{error.platforms}</p>
                )}  */}
                <br />
                <br />
                <button type="submit">Create game</button>
            </form>
        </div>
    )
}