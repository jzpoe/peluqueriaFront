

import Principal from "../principal/principal1/Principal"
import Principal2 from "../principal/principal2/Principal2"
import Principal3 from "../principal/principal3/Principal3"
import "./containerimg.css"

const Peluqueria = () => {
  return (
    <div className="contimg">
      
      <img src="img/salon.jpg" alt="imagen de peluqueria"  />
      <h1 className="textoImagen">Encuentra tu corte ideal con nosotros</h1>
      <button className="btn-cita">Agenda tu cita</button>
      <p className="parrafoCortes">Nuestros cortes</p>
      <div className="containerImagenes">
        <Principal/>
        <Principal2/>
        <Principal3/>
      </div>
    </div>
    
  )
}

export default Peluqueria
