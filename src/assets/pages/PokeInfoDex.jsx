import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import './styles/PokeInfoDex.css'
import Menu from "../components/PokedexPage/Menu"
import Stats from "../components/PokeInfoDex/Stats"


const PokeInfoDex = () => {

  const { name } = useParams()

  const [pokemon, getpokemon] = useFetch()

  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    getpokemon(url)

  }, [name])

  const navigate = useNavigate()

  const handleReturn = (e) => {
    e.preventDefault()
    navigate('/pokedex')
  }
  
  const height_m = (data) => {
    const value = data?.height
    const height = value/10
    return height
  }

  const weight_kg= (data) => {
    const value = data?.height
    const weight = value/10
    return weight
  }

  const data_stats = {
    hp: pokemon?.stats['0'].base_stat,
    attack: pokemon?.stats['1'].base_stat,
    defence: pokemon?.stats['2'].base_stat,
    specialAttack: pokemon?.stats['3'].base_stat,
    specialDefense: pokemon?.stats['4'].base_stat,
    speed: pokemon?.stats['5'].base_stat,
  }
  // console.log(data_stats.hp, data_stats.attack, data_stats.defence, data_stats.specialAttack, data_stats.specialDefense, data_stats.speed)

  // console.log(pokemon)
  // console.log(height_m(pokemon))

  return (
    <div className="container_info_pokemon">
      <div className="header_info_page">
        <Menu/>
      </div>
      <div className="body_info_page">
        <div className="container_stats">
          <div className="card_stats1">
            <div className="card_stats_color_back"></div>
            <div className="card_stats_color_front">
              <div className="color_front"></div>
            </div>
            <div className="card_stats_content">
              <div className="logo_pokemon_card"></div>
              <img className="pokemon_frame" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
              <h2 className="pokemon_name">{pokemon?.name}</h2>
              <hr className="rule_line" />
              <div className="phisical_stats">
                <div className="stats_height">
                  <p className="title_stat">Altura</p>
                  <p className="value_stat">{height_m(pokemon)} m</p>
                </div>
                <div className="stats_weight">
                  <p className="title_stat">Peso</p>
                  <p className="value_stat">{weight_kg(pokemon)} kg</p>
                </div>
              </div>
              <div className="stats_types">
                <p className="pokemon_type">Tipo</p>
                <p className="type_type_type">tipo 1</p>
              </div>
              <div className="stats_abilities">
                <p className="pokemon_abilities">Habilidades</p>
                <p className="abiliti_habiliti">hab 1 hab 2</p>
              </div>
            </div>
          </div>
          <div className="card_stats2">
            <div className="header_stats_values">
              <div className="header_grid">
                <p className="title_stats">Estadisticas&nbsp;</p>
                <hr className="hr_stats" />
              </div>
            </div>
            <div className="stats_details">
              <Stats
              data = {data_stats}
              />
            </div>
          </div>
          <div className="card_stats3"></div>
        </div>
      </div>
      <div className="footer_info_page">
        <div className="footer_navigate">
          <button className="button_back" onClick={handleReturn}>Regresar</button>
        </div>
      </div>
    </div>
  )
}

export default PokeInfoDex