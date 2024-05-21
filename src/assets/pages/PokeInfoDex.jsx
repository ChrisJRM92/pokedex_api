import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"


const PokeInfoDex = () => {

  const { name } = useParams()

  const [pokemon, getpokemon] = useFetch()

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    getpokemon(url)

  }, [name])
  
  // console.log(pokemon)

  return (
    <div className="container_info_pokemon">
      <div className="header_info_page"></div>
      <div className="body_info_page"></div>
      <div className="footer_info_page"></div>
      <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      <h2>{pokemon?.name}</h2>
    </div>
  )
}

export default PokeInfoDex