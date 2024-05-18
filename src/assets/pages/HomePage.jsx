import { useRef } from "react"
import { setTrainer } from "../../store/slices/trainerSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"


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
    <div>
      <h1>Pokedex</h1>
      <p>hi trainer, if you want to find you favorite pokemon please give me your traner name</p>
      <form onSubmit={handleSubmit} action="">
        <input ref={inputTrainer} type="text" />
        <button>Catch them all</button>
      </form>
    </div>
  )
}

export default HomePage