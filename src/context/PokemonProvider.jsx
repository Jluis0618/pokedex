import React, { useEffect, useState } from 'react'
import { PokemonContext } from './PokemonContext';
import { useForm } from '../hook/useForm';

export const PokemonProvider = ({children}) => {

    const [offset, setOffset] = useState(0);
    // Almacenar pokemons
    const [allPokemons, setAllPokemons] = useState([]) // 50 limit
    // Almacenar pokemons globales
    const [globalPokemons, setGlobalPokemons] = useState([])

    //custom hook use form para exraer los valores del formulario
    const {valueSearch, onInputChange, onReset} = useForm({
        valueSearch: ''
    })

    //Estados simples
    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState(false);

    //llamar 50 pokemones
    const getAllPokemons = async (limit = 50) =>{
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const res = await fetch(url)
        const data = await res.json()
        console.log(data.results)

        // nuevo llamado a la API
        const promises = data.results.map(async (pokemon) =>{
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
        })

    console.log(promises)
       const results = await Promise.all(promises);
       console.log(results)
       setAllPokemons([...allPokemons, ...results]);
       setLoading(false);
    }

    // Funcion para obtener todos los pokemones 
    const getGlobalPokemons = async () =>{
        const url = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
        const res = await fetch(url)
        const data = await res.json()
        

        // nuevo llamado a la API
        const promises = data.results.map(async (pokemon) =>{
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
        })

       const results = await Promise.all(promises);
       setGlobalPokemons(results);
       setLoading(false);
    }

    // Funcion para llamar un pokemon por id
    const getPokemonById = async (id) =>{
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        const res = await fetch(url)
        const data = await res.json()
        return data;
    }

    useEffect(() => {
        getAllPokemons();
    }, [offset])

    useEffect(()=>{
        getGlobalPokemons();
    },[])

    
    // btn cargar mas
    const onClickLoadMore = () =>{
        setOffset(offset + 50);
    }


    // filter functions
    const [typeSelected, setTypeSelected] = useState({
        grass: false,
        fire: false,
        water: false,
        bug: false,
        normal: false,
        poison: false,
        electric: false,
        ground: false,
        fairy: false,
        fighting: false,
        psychic: false,
        rock: false,
        ghost: false,
        ice: false,
        dragon: false,
        dark: false,
        steel: false,
        flying: false,
        unknown: false,
        shadow: false
    });

    const [filteredPokemons, setFilteredPokemons] = useState([]);
    

    const handleCheckbox = e => {
		setTypeSelected({
			...typeSelected,
			[e.target.name]: e.target.checked, // el e.target.checked es para saber si esta seleccionado o no
		});

		if (e.target.checked) {
			const filteredResults = globalPokemons.filter(pokemon =>
				pokemon.types
					.map(type => type.type.name)
					.includes(e.target.name)
			);
			setFilteredPokemons([...filteredPokemons, ...filteredResults]);
		} else {
			const filteredResults = filteredPokemons.filter(
				pokemon =>
					!pokemon.types
						.map(type => type.type.name)
						.includes(e.target.name)
			);
			setFilteredPokemons([...filteredResults]);
		}
	};
       
    
  return (
    <PokemonContext.Provider value={{
        valueSearch, // valor del input
        onInputChange, // funcion para cambiar el valor del input
        onReset, // funcion para resetear el valor del input
        allPokemons, // pokemones
        globalPokemons, // pokemones globales
        getPokemonById, //  funcion para llamar un pokemon por id
        onClickLoadMore, // funcion para llamar mas pokemones
        loading, // estado de carga
        active, // estado de activo para el filter
        setLoading, // funcion para cambiar el estado de carga
        setActive, // funcion para cambiar el estado de activo
        handleCheckbox, // funcion para manejar el checkbox
        filteredPokemons // pokemones filtrados
    }}>
        {children}
    </PokemonContext.Provider>
  )
}

