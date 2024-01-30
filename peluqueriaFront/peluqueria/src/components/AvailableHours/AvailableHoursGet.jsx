

import axios from "../axios/Axios";

const AvailableHoursGet = async ()  => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/availableCalendar', {Headers:{authorization: `Bearer${token}`}
            
        });
        console.log(response.data.available);
        return response.data.available;
    } catch (error) {
        console.error('Error al obtener el objeto:', error);
        throw error;
    }
}

export default AvailableHoursGet;