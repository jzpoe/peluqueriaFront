// import { Link } from "react-router-dom";
import "./login.css"
import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
  
    const handleLogin = () => {
      // Aquí puedes agregar lógica de autenticación
      // En este ejemplo, simplemente marcamos al usuario como autenticado
      setLoggedIn(true);
    };
  
    const handleLogout = () => {
      // Lógica para cerrar sesión
      setLoggedIn(false);
    };
  
    return (
      <div className="app">
        {loggedIn ? (
          <div>
            <p>Bienvenido, {username}!</p>
            <button onClick={handleLogout}>Cerrar Sesión</button>
          </div>
        ) : (
          <div>
            <label>
              Usuario:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label>
              Contraseña:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button onClick={handleLogin}>Iniciar Sesión</button>
          </div>
        )}
      </div>
    );
  };

export default Login
