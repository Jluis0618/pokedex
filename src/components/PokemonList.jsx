import React, { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext';
import { CardPokemon } from './CardPokemon';
import { Loader } from './Loader';

export const PokemonList = () => {

    const { allPokemons, loading, filteredPokemons } = useContext(PokemonContext);
    
    

  return (
    <>
      {
        loading ? (<Loader/>) :
        (
          <div className="card-list-pokemon container">
            {
              filteredPokemons.length > 0 ? (
                <>
                  {filteredPokemons.map((pokemon)=>{
                  return <CardPokemon key={pokemon.id} pokemon={pokemon}/>
                  })}
                </>
              ) : (
                <>
                  {allPokemons.map((pokemon)=>{
                  return <CardPokemon key={pokemon.id} pokemon={pokemon}/>
                  })}
                </>
              )
            }
             
          </div>)
      }
    
    </>
  )
}
