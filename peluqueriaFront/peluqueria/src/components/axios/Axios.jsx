import axios from "axios";


//axios.defaults.baseURL = "http://localhost:3001"
axios.defaults.baseURL = "https://back-peluqueria.vercel.app/"
axios.defaults.withCredentials = true;

export default axios;