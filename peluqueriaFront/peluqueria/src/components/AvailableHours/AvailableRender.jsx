import  { useEffect, useState } from 'react'
import AvailableHoursGet from './AvailableHoursGet';

const AvailableRender = () => {
    const [disponible, setDisposable]= useState([]);


    useEffect(()=>{
        const fetchAvailable = async()=>{
            try {
                const response = await AvailableHoursGet()
                console.log(response);
                setDisposable(response)
            } catch (error) {
                console.error("Error fetching dates:", error);

            }
        }
        fetchAvailable();
    },[])
  return (
    <div>
      {
        disponible.map((available, index)=>(
            <div key={index}>
            <p>{`Fecha y hora agendada: ${available.dateTime}`}</p>
            </div>
        ))
      }
    </div>
  )
}

export default AvailableRender
