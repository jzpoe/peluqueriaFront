
import { useEffect, useState } from "react";
import "./navbar.css";
import { Link, Outlet } from "react-router-dom";
import ScrollReveal from 'scrollreveal';
ScrollReveal({ reset: true });

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    ScrollReveal().reveal('.ul', {
      duration: 1000,
      reset: true,
      origin: 'bottom',
      distance: '20px',
    })
    
    
  }, [])
  

  return (
    <div className={`menu-container ${menuOpen ? 'open' : ''}`}>
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <div className="container-content">

      
      <div className="menu-content">
      <ul>
        <li>
          <Link to="/" onClick={closeMenu}>
            peluqueria
          </Link>
        </li>
        <li>
          <Link to="/Home" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>
            Nosotros
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>
            Contacto
          </Link>
        </li>

        <li className="registrate" onClick={closeMenu}>
          <Link to="/registrate">registrate</Link>
        </li>

        <li className="inicioSesion" onClick={closeMenu}>
          <Link to="/sesion">
            <button className="btn-login">LOGIN</button>
          </Link>
        </li>
      </ul>
    
      </div>
      </div>
      <Outlet />
    </div>
  );
  };

export default Navbar;
