import { useEffect, useState } from 'react';
import './Contacto.css';
import axios from "../axios/Axios";
import Swal from 'sweetalert2';


const Contacto = () => {
  

  //const [hours, setHours] = useState([]);
  const [disponibleHora, setDisposableHora] = useState([]);

  const handleHourClick = async (hour) => {
    
    try {

      
      const selectedDate = new Date();
      const selectedDateTime= new Date(`${selectedDate.toISOString().split('T')[0]} ${hour}`);

      const result = await mostrarAlerta();
      if(result.value){
        const response = await axios.post('/selectHour', {selectedDateTime})
        console.log(`Hora seleccionada: ${hour}`);
        console.log(response)
      }else{
        console.log('Operación cancelada');
      }
     
      
      
    } catch (error) {
      console.error('Error al seleccionar la hora:', error);
    }
    
    
  };

  const mostrarAlerta = () => {
    return Swal.fire({
      title: '¡Alerta!',
      text: '¿Deseas seleccionar esta hora?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    });
  };


  useEffect(() => {
    const currentDate = new Date().toISOString().split('T')[0];

    const horasDisponibles = async () => {
      try {
        const response = await axios.get(`/availableHour?date=${currentDate}`);
        setDisposableHora(response.data.data);
        } catch (error) {
        console.error("Error al obtener las horas del servidor:", error);
        throw error;
      }
    };
    horasDisponibles();
    
  }, []);
  return (
  <div className="parent">
      {disponibleHora.map((hour) => (
        <div key={hour} className="hour-card" >
          <p>{hour}</p>
        
          <button  onClick={() => handleHourClick(hour)}>Seleccionar</button>
        </div>
      ))}
    </div>
  
  ) 
};

export default Contacto;