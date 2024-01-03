import { useState } from "react";
import axios from "../axios/Axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/register", {
        name,
        email,
        password,
      });

      if (response.data.message === "Usuario registrado exitosamente") {
        navigate("/Login", {
          replace: true,
          state: {
            logged: true,
          },
        });
      }
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
    }
  };

  return (
    <div className="container-register">
      <form onSubmit={handleLogin}>
        <div className="input-name">
          <label>NOMBRE</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="input-correo">
          <label>CORREO</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-password">
          <label>CONTRASEÑA </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">registrate</button>
      </form>
    </div>
  );
};

export default Register;
