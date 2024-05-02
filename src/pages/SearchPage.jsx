import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { CardPokemon } from '../components';
import { PokemonContext } from '../context/PokemonContext';

export const SearchPage = () => {

  const location = useLocation();

  const {globalPokemons} = useContext(PokemonContext);

  const fliterPokemons = globalPokemons.filter(pokemon => {
    return pokemon.name.includes(location.state.toLowerCase());
  });

  return (
    <div className="container">
      <p className="p-search">Se encontraron {fliterPokemons.length} resultados</p>
      <div className="card-list-pokemon container">
      {fliterPokemons.map(pokemon => (
        <CardPokemon key={pokemon.id} pokemon={pokemon} />
      ))}
      </div>
    </div>
  )
}
