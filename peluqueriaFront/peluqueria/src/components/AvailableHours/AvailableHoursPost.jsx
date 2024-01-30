

import { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { setHours, setMinutes } from 'date-fns';
import axios from "../axios/Axios";
import es from 'date-fns/locale/es';
import './AvailableHours.css'; // Importa tu archivo de estilos aquí
import AvailableRender from './AvailableRender';
import HorasAvailables from './horasAvailables';

registerLocale('es', es);

const AvailableHours = () => {
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );

  const sendFecha = async () => {
    console.log('fecha seleccionada', { startDate });
    const token = localStorage.getItem('token');
    try {
      //const response = await axios.post('/sendFecha', { startDate: startDate.toISOString() });
      const response = await axios.post('/sendFecha', {Headers:{Authorization: `Bearer${token}`} }, { startDate: startDate.toISOString() });

     //const response = await axios.post('/sendFecha', { startDate });
      console.log(response);
    } catch (error) {
      console.error('Error al cargar la fecha:', error);
    }
  };

  return (
    <>
     
    <div className="available-hours-container">
      <DatePicker
        className='pickers'
        locale='es'
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        injectTimes={[
          setHours(setMinutes(new Date(), 1), 0),
          setHours(setMinutes(new Date(), 5), 12),
          setHours(setMinutes(new Date(), 59), 23),
        ]}
        dateFormat="dd-MM-yyyy"
      />
      <button className="agendar-button" onClick={sendFecha}>Agendar</button>
      
      
    </div>
    <div>
      <AvailableRender/>
      <HorasAvailables/>
    </div>
   
    </>
  
   
  );
  
};

export default AvailableHours;