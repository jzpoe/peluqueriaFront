import axios from "axios";


//axios.defaults.baseURL = "http://localhost:3001"

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://back-peluqueria.vercel.app";  // Reemplaza con la URL de tu servidor
axios.defaults.withCredentials = true; // Habilita el intercambio de cookies o encabezados de autorización

export default axios;