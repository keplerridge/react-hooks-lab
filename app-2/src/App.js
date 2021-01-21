import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Pokemon from './Pokemon';
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(res => setPokemonList(res.data.results))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      {pokemonList.map((el, i) => {
        return <Pokemon el={el.name} key={i} />
      })}
    </div>
  );
}

export default App;
