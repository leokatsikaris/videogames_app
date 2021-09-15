import React , { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { addGame } from '../../actions/actions';
import styles from './createGame.module.css';

// TRAIGO LOS GENEROS Y LAS PLATAFORMAS AL ARRAY ASI CARGAN MAS RAPIDO

const genres = ["Indie", "Adventure", "Strategy", "Shooter", "Puzzle", "Arcade", "Platformer", "Racing", "Massively Multiplayer", "Sports", "Fighting", "Family", "Board Games", "Educational", "Card", "Simulation", "Casual", "RPG", "Action"].sort();

const platforms = ["Playstation 3", "Playstation 4", "Playstation 5", "Nintendo Switch", "Xbox One", "PC", "Xbox 360", "Xbox Series S/X", "macOS", "Linux", "Android", "iOS", "Xbox", "PS Vita", "Web"].sort();

// FUNCION PARA VALIDAR DATOS OBLIGATORIOS

function validate(input){
  let errors = {};
  if(!input.name){
    errors.name =  "Name required";
  }
  if (!input.description_raw){
    errors.description_raw = "Description required";
  }
  if (!input.platforms){
    errors.platforms = "Platform/s required"
  }
  return errors; 
}


export function CreateGame () {

  const dispatch = useDispatch();

  const history = useHistory();

  // ESTADO LOCAL DE ERRORES
  const [error, setError] = useState({});


  // ESTADO LOCAL DE INPUT

    const [input, setInput] = useState({
        name: "",
        description_raw: "",
        release: "",
        rating: "",
        genres: [],
        platforms: []
      })

      // HANDLER DE LOS SELECT

      const handleSelect = function (e){
        setInput({
          ...input,
          [e.target.name]: [...input[e.target.name], e.target.value]
        })
      }

      // HANDLER PARA ELIMINAR OPCIONES ELEGIDAS 

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

      // HANDLER DE LOS INPUT
    
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

      // HANDLER SUBMIT
      
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
            <form onSubmit={handleSubmit} className={styles.formWindow}>
                <br />
                <label>Name: </label>
                <input 
                name='name'
                value={input.name}
                placeholder='Insert a name'
                onChange={handleChange} 
                onKeyUp={handleChange}
                onBlur={handleChange} 
                className={styles.text}/>
                <p>{error?.name}</p>
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
                className={styles.text}
                />
                <p>{error?.description_raw}</p>
                <br />
                <label>Released date: </label>
                <input 
                name='released' 
                value={input.released}
                placeholder='Insert a date'
                onChange={handleChange} 
                className={styles.text}/>
                <br />
                <label>Rating: </label>
                <input 
                name='rating' 
                value={input.rating} 
                placeholder='For example: 3.0'
                onChange={handleChange}
                className={styles.text}/>
                <br />
                <label>Gender/genres:</label>
                <br />
                <select name='genres' onChange={handleSelect} className={styles.text}>
                  <option disabled selected hidden>Select at least one gender...</option>
                  {genres.map(g => {
                    return <option key={g} value={g}>{g}</option>
                  })}
                </select>
                {input.genres.map(g => {
                return (
                <div key={g} className={styles.divPlatforms}> 
                  <p>{g}</p>
                  <button name={g} type='button' onClick={() => handleDelete1(g)}>X</button>
                </div>
                )}
              )}
                <br />
                <br />
                <label>Platform/s:</label>
                <br />
                <select name='platforms' onChange={handleSelect} className={styles.text}>
                  <option disabled selected hidden>Select at least one platform...</option>
                  {platforms.map(p => {
                    return <option key={p} value={p}>{p}</option>
                  })}
                </select>
              {input.platforms.map(p => {
                return (
                <div key={p} className={styles.divPlatforms}>
                  <p>{p} </p>
                  <button type='button' onClick={() => handleDelete2(p)}>X</button>
                </div>
                )}
              )}
                <p>{error.platforms}</p>
                <button type="submit" className={styles.submitButton}>Create game</button>
            </form>
        </div>
    )
}