const express = require('express');
const login = require('./login/login')
const app = express();
const cors = require('cors');

const port = 3000

app.use(cors());
app.use(express.json());



app.use('/login', login)


app.get('/api', (req, res)=>{
    res.send('bienvenido')
} )

app.listen(port, (req, res)=>{
    console.log(`escuchando en el puerto ${port}`);
})