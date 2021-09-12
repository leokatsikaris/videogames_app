import React , { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { addGame } from '../../actions/actions';

const genres = ["Indie", "Adventure", "Strategy", "Shooter", "Puzzle", "Arcade", "Platformer", "Racing", "Massively Multiplayer", "Sports", "Fighting", "Family", "Board Games", "Educational", "Card", "Simulation", "Casual", "RPG", "Action"].sort();

const platforms = ["Playstation 3", "Playstation 4", "Playstation 5", "Nintendo Switch", "Xbox One", "PC", "Xbox 360", "Xbox Series S/X", "macOS", "Linux", "Android", "iOS", "Xbox", "PS Vita", "Web"].sort();

function validate(input){
  let errors = {};
  if(!input.name){
    errors.name =  "Name required";
  }
  if (!input.description_raw){
    errors.description_raw = "Description required";
  }
  if (!input.platforms[0]){
    errors.platforms = "Platform/s required"
  }
  return errors; 
}


export function CreateGame () {

  const dispatch = useDispatch();

  const history = useHistory();

  const [error, setError] = useState({});

    const [input, setInput] = useState({
        name: "",
        description_raw: "",
        release: "",
        rating: "",
        genres: [],
        platforms: []
      })

      const handleSelect = function (e){
        setInput({
          ...input,
          [e.target.name]: [...input[e.target.name], e.target.value]
        })
      }

      const handleDelete1 = function(el){
        setInput({
          ...input,
          genres: input.genres.filter(g => g !== el)
        })
      }
      
      const handleDelete2 = function(el){
        setInput({
          ...input,
          platforms: input.platforms.filter(g => g !== el)
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
        dispatch(addGame(input));
        e.preventDefault();
        setInput({
        name: "",
        description_raw: "",
        released: "",
        rating: "",
        genres: [],
        platforms: []
        });
        alert('New videogame created successfully');
        history.push('/home')

      }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input 
                name='name'
                value={input.name}
                placeholder='Insert a name'
                onChange={handleChange} 
                onKeyUp={handleChange}
                onBlur={handleChange} />
                <p>{error.name}</p>
                <br />
                <br />
                <label>Description: </label>
                <br />
                <textarea 
                name='description_raw' 
                value={input.description_raw} 
                placeholder='Insert a description'
                onChange={handleChange} 
                onKeyUp={handleChange}
                onBlur={handleChange}
                />
                <p>{error.description_raw}</p>
                <br />
                <br />
                <label>Released date: </label>
                <input 
                name='released' 
                value={input.released}
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
                <select name='genres' onChange={handleSelect}>
                  <option disabled selected hidden>Select at least one gender...</option>
                  {genres.map(g => {
                    return <option value={g}>{g}</option>
                  })}
                </select>
                {input.genres.map(g => {
                return (
                <div>
                  <p>{g}</p>
                  <button name={g} type='button' onClick={() => handleDelete1(g)}>X</button>
                </div>
                )}
              )}
                <br />
                <br />
                <label>Platform/s:</label>
                <br />
                <select name='platforms' onChange={handleSelect}>
                  <option disabled selected hidden>Select at least one platform...</option>
                  {platforms.map(p => {
                    return <option value={p}>{p}</option>
                  })}
                </select>
              {input.platforms.map(p => {
                return (
                <div>
                  <p>{p}</p>
                  <button type='button' onClick={() => handleDelete2(p)}>X</button>
                </div>
                )}
              )}
                <p>{error.platforms}</p>
                <br />
                <br />
                <button type="submit">Create game</button>
            </form>
        </div>
    )
}