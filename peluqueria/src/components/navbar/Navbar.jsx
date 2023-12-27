import "./navbar.css"
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    
        <div className="container-navbar">
                    

        <nav className="navegacion">
          <ul>
          <li>
              <Link to="/peluqueria">peluqueria</Link>
            </li>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/about">Nosotros</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
            <li className="inicioSesion" >
              <Link to="/sesion"  >inicio de sesion</Link>
            </li>
          </ul>

        </nav>

        <Outlet/>
        </div>
        

    
  )
}

export default Navbar
