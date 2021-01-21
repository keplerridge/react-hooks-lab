import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const PokemonList = (props) => {
    const [list, setList] = useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then((res) => {
            setList(res.data.results)
        })
        .catch(err => console.log(err))
    }, [])

    return(
        <div>
            {list.map((el, i) => {
                return(
                    <Link key={i} to={`/pokemon/${el.name}`}>
                        
                        <div>{el.name}</div>
                    </Link>
                )
            })}
        </div>
    )
}

export default PokemonList;