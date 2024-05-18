import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from '../components/PokedexPage/PokeCard'
import SelectType from "../components/PokedexPage/SelectType"


const PokedexPage = () => {

  const [searchedName, setsearchedName] = useState('')

  const [typeselected, settypeselected] = useState('allPokemons')

  // console.log(typeselected)

  const trainer = useSelector( states  => states.trainer )

  const [ pokemons, getPokemons, getTypePokemon ] = useFetch()

  useEffect(() => {
    if(typeselected === 'allPokemons'){
      // peticion de todos los pokemons
      const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
      getPokemons(url)
    }else{
      // Peticion de los pokemos por tippo
      getTypePokemon(typeselected)
    }
    
  }, [typeselected])
  
  // console.log(pokemons)

  const inputName = useRef()

  const handleSearch = (e) =>{
    e.preventDefault()
    setsearchedName(inputName.current.value.trim().toLowerCase())
  }

  // console.log(searchedName)

  const callbackFilter = (poke) => {
    const filterName = poke.name.includes(searchedName)
    return filterName
  }

  return (
    <div>
      <h2>Pokedex</h2>
      <p>Hola {trainer} aqui podras encontrar tu pokemos favorito</p>
      <form onSubmit={handleSearch}>
        <input ref={inputName} type="text" />
        <button>Buscar</button>
      </form>
      <SelectType
      settypeselected ={settypeselected}
      />
      <div>
        {
          pokemons && pokemons.results.filter(callbackFilter).length === 0 
          ? <h2>No existe pokemon con tu busqueda</h2>
          : (
            pokemons?.results.filter(callbackFilter).map(poke => (
              <PokeCard
                key={poke.url}
                poke={poke}
              />
            ))
          )
          
        }
      </div>

    </div>
  )
}

export default PokedexPage