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
    <article>
      <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      <h2>{pokemon?.name}</h2>
    </article>
  )
}

export default PokeInfoDex