import { useState } from "react";
import "./navbar.css";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu=() => {
    setMenuOpen(false)
  }


  return (
    <div className="container-navbar">
              <button className='menuhamburger' onClick={toggleMenu}>☰</button>

      <nav className="navegacion">
        
      <ul className={`enlaces ${menuOpen ? "open" : ""}`}>

          <li>
            <Link to="/peluqueria" onClick={closeMenu}>peluqueria</Link>
          </li>
          <li>
            <Link to="/Home" onClick={closeMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about"onClick={closeMenu}>Nosotros</Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>Contacto</Link>
          </li>
          <li className="inicioSesion" onClick={closeMenu}>
            <Link to="/sesion">inicio de sesion</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Navbar;
