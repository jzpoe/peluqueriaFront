
const db = require('./src/db/db');
const express = require('express');
const register = require('./src/register/register')
const login = require('./src/login/login');
const app = express();
const cors = require('cors');
require('dotenv').config();


const port = process.env.PORT
app.use(express.json());
app.use(cors());




app.use(register)
app.use(login)

app.get('/api', (req, res)=>{
    res.send('bienvenido')
} )

app.listen(port, (req, res)=>{
    console.log(`escuchando en el puerto ${port}`);
})