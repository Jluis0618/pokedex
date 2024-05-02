import React, { useContext } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import pokedexLogo from '../assets/pokedexLogo.png'
import { PokemonContext } from '../context/PokemonContext';


export const Navigation = () => {

    const {onInputChange, valueSearch, onReset} = useContext(PokemonContext);

    const navigate = useNavigate();
    
    const onSearchSubmit = (e) => {
        e.preventDefault();
        navigate('/search', {state: valueSearch})

        onReset();
    }

  return <div>
    <header className='container'>
        <Link to='/' className='logo'>
            <img src={pokedexLogo} alt="" />
        </Link>
        <form onSubmit={onSearchSubmit}>
            <div className="form-group">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke='currentColor'
                    strokeWidth='1.5'
                    className="icon-search"
                    viewBox="0 0 24 24"
                >
                <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'/>
                </svg>
                <input 
                    type="search"
                    name='valueSearch'
                    id=''
                    value={valueSearch}
                    onChange={onInputChange}
                    placeholder='Buscar el nombre del pokemon'/>
            </div>
            <button className='btn-search'>Buscar </button>
        </form>
    </header>
    <Outlet />
  </div>
}
