// import { Link } from "react-router-dom";
import "./login.css";
import axios from "../axios/Axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //const [name, setName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/sesion",   {
        
        email,
        password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);

      console.log(token);
      if (token) {
        localStorage.setItem("token", token);
        console.log(token);
        navigate("/", {
          replace: true,
          state: {
            logged: true,
          },
        });
      }
    } catch (error) {
      console.error("Error al iniciar sesion", error);
    }
  };

  // const handleLogout = () => {
  //   // Lógica para cerrar sesión
  //   setLoggedIn(false);
  // };

  return (
    <div className="app">
      <div>
        <label>
          CORREO:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button className="bton-Inicio" onClick={handleLogin}>
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
};

export default Login;
