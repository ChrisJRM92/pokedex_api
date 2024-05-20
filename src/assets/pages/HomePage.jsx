import { useRef } from "react"
import { setTrainer } from "../../store/slices/trainerSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import './styles/HomePage.css'


const HomePage = () => {

  // const trainer = useSelector( states => states.trainer )

  const inputTrainer = useRef()

  const dispach = useDispatch() 

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispach(setTrainer(inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }

  // console.log(trainer)

  return (
    <div className="container">
      <div className="container_waves wave"></div>
      
      <div className="container_front_content">
        <div className="container_content">
          <div className="container_grid_icon">
            <div className="header_icon"></div>
            <div className="header_title">
              <h1 className="title">Pokédex virtual</h1>
            </div>
            <div className="header_description">
              <h2 className="description">Estadisticas en un solo lugar</h2>
            </div>
          </div>
          <div className="pikachu_icon"></div>
          <h1 className="welcome_title">Hola entrenador! te damos la bienvenida a Pokédex Virtual</h1>
          <p className="paragraph_1">Aquí encontrarás estadisticas completas de todos tus pokémons favoritos.</p>
          <p className="paragraph_2">Ingresa tu nombre para iniciar la búsqueda</p>
          <div className="container_form">
            <form onSubmit={handleSubmit} action="">
              <input ref={inputTrainer} type="text" placeholder="Ingresa tu nombre" />
              <button>Entrar</button>
            </form>
          </div>
          <p className="paragraph_3">*Pokémon el logo y sus personajes son propiedad intelectual de Nintendo, Creatures Inc. y Game Freak.</p>
          <p className="paragraph_4">*Datos obtenidos de <a href="https://pokeapi.co/" target="_blank">PokeApi</a></p>
          <p className="paragraph_5">*Diseño inspirado en: <a href="https://dribbble.com/shots/2864555-Landing-Page-for-Pokemon-Go-App" target="_blank">Max Iver</a></p>
          <div className="container_author">
            <a href="https://christianromero.netlify.app/#home" target="_blank"><img src="/public/profile.png" alt="Christian R" /></a>
            <a href="https://github.com/ChrisJRM92/pokedex_api" target="_blank"><i class="fa-brands fa-github"></i></a>
          </div>
        </div>
        <div className="container_pikachu"></div>
      </div>
    </div>
  )
}

export default HomePage