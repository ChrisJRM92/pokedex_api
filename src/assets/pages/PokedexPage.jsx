import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from '../components/PokedexPage/PokeCard'
import SelectType from "../components/PokedexPage/SelectType"
import './styles/PokedexPage.css'
import Menu from "../components/PokedexPage/Menu"


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
    <div className="container__home">
      {/* ----------Cabecera principal----------- */}
      <header>
        <Menu/>
      </header>

      {/* ----------Contenido de la pagina---------- */}
      <main className="main">
        <div className="main__welcome">
          <p className="welcome">Hola</p>
          <p className="user_welcome">&nbsp;{trainer}&nbsp;</p>
          <p className="welcome">aqui puedes encontrar todos tus pokemons!</p>
        </div>
        
        <div className="main__form">
          <form className="form__search" onSubmit={handleSearch}>
            <input className="form__input" ref={inputName} type="text" />
            <button className="form__button">Buscar</button>
          </form>
          <SelectType settypeselected={settypeselected}/>
        </div>

        <div className="cards_pokemons">
          {
            pokemons && pokemons.results.filter(callbackFilter).length === 0
              ? <div className="container_not_found">
                <h2 className="not_found">Lo sentimos, no existe un pokémon con tu búsqueda</h2>
                <h2 className="not_found_icon">🔍</h2>
                </div>
                
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
      </main>

      {/* ----------Pie de pagina---------- */}
      <footer className="footer">
        <p>Paginacion aqui</p>
      </footer>

    </div>
  )
}

export default PokedexPage