import { useEffect, useState } from "react";
import Principal from "../principal/principal1/Principal";
import Principal2 from "../principal/principal2/Principal2";
import Principal3 from "../principal/principal3/Principal3";
import "./containerimg.css";
import ScrollReveal from "scrollreveal";
import Swal from 'sweetalert2';

ScrollReveal({ reset: true });

const Peluqueria = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

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

  const handleLogOut = async () => {
    const result = await mostrarAlerta();

    if (result.isConfirmed) {
      clearToken();
    } else {
      console.log('Operación cancelada');
    }
  }

  const clearToken = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  }

  const mostrarAlerta = async () => {
    const result = await Swal.fire({
      title: '¡Alerta!',
      text: '¿Deseas cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
    });

    return {
      isConfirmed: result.isConfirmed,
    };
  };

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
        {isLoggedIn && (
          <button onClick={handleLogOut} className="btn-cerrar-sesio">Cerrar sesión</button>
        )}
      </div>
    </div>
  );
};

export default Peluqueria;