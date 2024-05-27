import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import '../styles/SelectType.css'


const SelectType = ({settypeselected}) => {
  
  const [ types, gettypes ] = useFetch()

  useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/type?offset=0&limit=100'
    gettypes(url)
  }, [])
  

  const handleChange = (e) =>{
    settypeselected(e.target.value)
  }

  const types_ES = {
    normal: 'Normal',
    fighting: 'Lucha',
    flying: 'Volador',
    poison: 'Veneno',
    ground: 'Tierra',
    rock: 'Roca',
    bug: 'Bicho',
    ghost: 'Fantasma',
    steel: 'Acero',
    fire: 'Fuego',
    water: 'Agua',
    grass: 'Planta',
    electric: 'Eléctrico',
    psychic: 'Psíquico',
    ice: 'Hielo',
    dragon: 'Dragón',
    dark: 'Siniestro',
    fairy: 'Hada',
    stellar: 'Estelar',
    unknown: 'Desconocido',
    shadow: 'Sombra'
  }
  // console.log(types?.results[0].name)

  return (
    <select className="select__type" onChange={handleChange}>
      <option className="type__options" value="allPokemons">Mostrar todos</option>
      {
        types?.results.map(typeInfo =>(
          <option key={typeInfo.url} value={typeInfo.url}>
            {types_ES[typeInfo.name] || typeInfo.name}
          </option>
        ))
      }
    </select>
  )
}

export default SelectType