import React from 'react'
import { Link } from 'react-router-dom'
import { putZeros, toUpperCase } from '../helper/helper'

export const CardPokemon = ({pokemon}) => {

    
   return (
    <Link to={`/pokemon/${pokemon.id}`} className='card-pokemon'>
        
        <div className="card-img">
        <span className='pokemon-id'>#{putZeros(pokemon.id)}</span>
            <img 
                src={pokemon.sprites.other.dream_world.front_default || pokemon.sprites.front_default} 
                alt={`Pokemon ${pokemon.id}`} />
        </div>
        <div className="card-info">            
            <h3><span className='pokemon-id-span'>#{putZeros(pokemon.id)}</span>{toUpperCase(pokemon.name)}</h3>
            <div className="card-types">
                {pokemon.types.map((type)=>{
                    return <span key={type.type.name} className={type.type.name}>{type.type.name}</span>
                })}
            </div>
            <div className="card-wh">
                <span className='pokemon-wh'>{pokemon.weight}M</span>
                <span className='pokemon-wh'>{pokemon.height}M</span>
            </div>
        </div>
    </Link>  )
}
