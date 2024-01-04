
const db = require('./src/db/db');
const express = require('express');
const register = require('./src/register/register')
const login = require('./src/login/login');
const app = express();
const cors = require('cors');
require('dotenv').config();


const corsOptions = {
    origin: 'https://peluqueria-riht.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,  // Habilita el uso de credenciales (cookies, encabezados de autorización, etc.)
    optionsSuccessStatus: 204,  // Cambia el código de estado de las respuestas OPTIONS exitosas a 204
};
  
  app.use(cors(corsOptions));


app.use(express.json());
   

app.use(register);
app.use(login);

const port = process.env.PORT

app.get('/api', (req, res)=>{
    res.send('bienvenido')
} )

app.listen(port, (req, res)=>{
    console.log(`escuchando en el puerto ${port}`);
})