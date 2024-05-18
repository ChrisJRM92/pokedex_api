import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"


const PokeCard = ({poke}) => {

  const [pokemon, getpokemon] = useFetch()

  useEffect(() => {
    getpokemon(poke.url)
  }, [])
  
  const navigate = useNavigate()

  const handleDetail = () => {
    navigate(`/pokemon/${pokemon.name}`)
  }

  // console.log(pokemon)

  return (
    <article onClick={handleDetail}>
      <header>
        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <section>
        <h3>{pokemon?.name}</h3>

        <ul>
          {
          pokemon?.types.map( typeInfo => (
            <li key={typeInfo.type.url}> {typeInfo?.type.name}</li>
          ))
          }
        </ul>
          <hr />
        <ul>
          {
            pokemon?.stats.map( statInfo => (
              <li key={statInfo.stat.url}>
                <span>{statInfo.stat.name}</span>
                <span>{statInfo.base_stat}</span>
              </li>
            ))
          }
        </ul>
      </section>
    </article>
  )
}

export default PokeCard