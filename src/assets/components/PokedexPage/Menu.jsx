import { useNavigate } from 'react-router-dom'
import '../styles/Menu.css'
import Logo from './Logo'

const Menu = () => {

  const navigate = useNavigate()

  const handleExit = (e) => {
    e.preventDefault()
    navigate('/')
  }


  return (
    <div className='header_menu'>
      <div className="header__wave"></div>

      <div className="header__contain">
        <div className="contain__icon">
          <Logo />
        </div>
        <div className="header__button">
          <button onClick={handleExit}>Salir</button>
        </div>
      </div>
    </div>
  )
}

export default Menu