import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './assets/pages/HomePage'
import PokedexPage from './assets/pages/PokedexPage'
import PokeInfoDex from './assets/pages/PokeInfoDex'
import ProtecteRoutes from './assets/pages/ProtecteRoutes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path = '/' element={<HomePage/>} />
        <Route element={<ProtecteRoutes/>}>
          <Route path = '/pokedex' element={<PokedexPage/>} />
          <Route path = '/pokemon/:name' element={<PokeInfoDex/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
