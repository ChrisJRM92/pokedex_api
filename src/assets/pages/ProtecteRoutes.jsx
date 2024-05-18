import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const ProtecteRoutes = () => {

  const trainer = useSelector( states => states.trainer)

  if(trainer.length >= 3){
    return <Outlet/>
  }else{
    return <Navigate to='/'/>
  }
}

export default ProtecteRoutes