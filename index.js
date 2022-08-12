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

 // Lectura y parseo del body
 app.use(express.json());

 //console.log(process.env)
// Rutas
//mean_user 
//bnnUdf36s4dDEVQt
app.get('/', (req, res)=> {
    res.json({
        ok: true,
        msg: 'Hola Mundo'
    })
})
const array = [];
//while (true) {
//This makes the array bigger on each iteration
//   array.push(new Array(10000000));

//   const memory = process.memoryUsage();
//   console.log((memory.heapUsed / 1024 / 1024 / 1024).toFixed(4), 'GB');
// }
//Rutas
app.use('/api/hospitales',require('./routes/hospital.routes'));

app.use('/api/usuarios',require('./routes/usuario.routes'));
app.use('/api/pacientes',require('./routes/paciente.routes'));
app.use('/api/pacientes/fechaVacunacion',require('./routes/paciente.routes'));
app.use('/api/login',require('./routes/auth.routes'));

app.listen(process.env.PORT,() => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});
