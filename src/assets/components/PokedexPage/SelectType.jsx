import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"


const SelectType = ({settypeselected}) => {
  
  const [ types, gettypes ] = useFetch()

  useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/type?offset=0&limit=100'
    gettypes(url)
  }, [])
  
  // console.log(types)

  const handleChange = (e) =>{
    settypeselected(e.target.value)
  }

  return (
    <select onChange={handleChange}>
      <option value="allPokemons">All pokemons</option>
      {
        types?.results.map(typeInfo =>(
          <option key={typeInfo.url} value={typeInfo.url}>
            {typeInfo.name}
          </option>
        ))
      }
    </select>
  )
}

export default SelectType