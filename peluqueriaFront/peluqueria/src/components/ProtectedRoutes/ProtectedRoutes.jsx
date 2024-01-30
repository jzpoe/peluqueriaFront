import {Navigate, Outlet} from 'react-router-dom'

const ProtectedRoutes = () => {


    const token= localStorage.getItem('token');
    console.log(token);
    if (!token){
        return <Navigate to ='sesion' />
        
    }

  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default ProtectedRoutes
