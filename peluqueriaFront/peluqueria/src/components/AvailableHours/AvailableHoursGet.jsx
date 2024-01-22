

import axios from "../axios/Axios";




const AvailableHoursGet = async ()  => {


try {
    const response = await axios.get('/availableHors')
    console.log(response.data)
    return response.data;
} catch (error) {
    console.error('Error al obtener el objeto:', error);
        throw error
}

}

export default AvailableHoursGet
