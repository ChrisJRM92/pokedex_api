import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import '../styles/PokeCard.css'


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
    <article className={`poke border_${pokemon?.types[0].type.name}`} onClick={handleDetail}>
      <header className={`poke_header bg_${pokemon?.types[0].type.name}`}>
        <img className="poke_sprite"  src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      
      <section className="poke_body">
        <h3 className={`poke_name text_${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
        <ul className="poke_types">
          {
          pokemon?.types.map( typeInfo => (
            <li className="poke_types_item" key={typeInfo.type.url}> {typeInfo?.type.name}</li>
          ))
          }
        </ul>
        <hr className="poke_hr" />
        
        <ul className="poke_stats">
          {
            pokemon?.stats.map( statInfo => (
              <li className="poke_stats_item" key={statInfo.stat.url}>
                <span className="poke_stats_label">{statInfo.stat.name}</span>
                <span className={`poke_stats_value text_${pokemon?.types[0].type.name}`}>{statInfo.base_stat}</span>
              </li>
            ))
          }
        </ul>
      </section>
    </article>
  )
}

export default PokeCard