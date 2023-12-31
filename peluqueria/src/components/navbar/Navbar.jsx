
import { useState } from "react";
import "./navbar.css";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  

  return (
    <div className={`enlaces ${menuOpen ? "open" : ""}`}>
      <button className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
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
      <Outlet />
    </div>
  );
  };

export default Navbar;
