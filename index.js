require('dotenv').config()
const cors = require('cors')
const express = require('express');
const  { dbConnection} = require('./database/config');

//Crear el servidor express
const app = express();

//Configurar CORS
app.use(cors());

// Base de Datos
 dbConnection();

    console.log(process.env)
// Rutas
//mean_user 
//bnnUdf36s4dDEVQt
app.get('/', (req, res)=> {
    res.json({
        ok: true,
        msg: 'Hola Mundo'
    })
})

app.listen(process.env.PORT,() => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});

