import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    
        <div>
        <nav>
          <ul>
            <li>
              <Link to="/Home">Peluqueria</Link>
            </li>
            <li>
              <Link to="/about">Nosotros</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
            <li>
              <Link to="/sales">Ventas</Link>
            </li>
          </ul>
        </nav>
        <Outlet/>
        </div>
    
  )
}

export default Navbar
