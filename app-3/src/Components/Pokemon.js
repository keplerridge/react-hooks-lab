import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Pokemon = (props) => {
    const {name} = props.match.params;
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => {
            setPokemon(res.data)
        })
        .catch(err => console.log(err))
    }, [name])

    return(
        <div>
            {pokemon.name}
            <img alt='Pokemon' src={pokemon.sprites?.front_default} />
        </div>
    )
}

export default Pokemon;