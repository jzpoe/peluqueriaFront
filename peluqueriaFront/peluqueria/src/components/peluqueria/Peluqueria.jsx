import { useEffect } from "react";
import Principal from "../principal/principal1/Principal";
import Principal2 from "../principal/principal2/Principal2";
import Principal3 from "../principal/principal3/Principal3";
import "./containerimg.css";
import ScrollReveal from "scrollreveal";
ScrollReveal({ reset: true });

const Peluqueria = () => {
  const clearToken = () => {
    localStorage.removeItem("token");
  };

  const isLoggedIn = () => {
    const token = localStorage.getItem("token");
    return !!token;
  };

  useEffect(() => {
    ScrollReveal().reveal(".textoImagen", {
      duration: 1000,
      reset: true,
      origin: "bottom",
      distance: "20px",
    });
    ScrollReveal().reveal(".btn-cita", {
      duration: 1000,
      origin: "right",
      distance: "20px",
    });
    ScrollReveal().reveal(".parrafoCortes", {
      duration: 1000,
      origin: "right",
      distance: "20px",
    });
  }, []);

  return (
    <div className="contimg">
      <img src="img/salon.jpg" alt="imagen de peluqueria" />
      <h1 className="textoImagen">Encuentra tu corte ideal con nosotros</h1>
      <button className="btn-cita">Agenda tu cita</button>
      <p className="parrafoCortes">Nuestros cortes</p>
      <div className="containerImagenes">
        <Principal />
        <Principal2 />
        <Principal3 />
      </div>
      <div className="container-btn">
      {isLoggedIn() && (
        <button onClick={clearToken} className="btn-cerrar-sesio">Cerrar sesión</button>
      )}
      </div>
       
    </div>
  );
};

export default Peluqueria;
