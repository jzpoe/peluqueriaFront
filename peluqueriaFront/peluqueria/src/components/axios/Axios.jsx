import axios from "axios";


//axios.defaults.baseURL = "http://localhost:3001"
//axios.defaults.baseURL = "back-peluqueria.vercel.app"
var xhr = new XMLHttpRequest();
xhr.open('POST', 'back-peluqueria.vercel.app', true);
xhr.withCredentials = true; // Habilita el intercambio de cookies o encabezados de autorización
xhr.send();

export default axios;