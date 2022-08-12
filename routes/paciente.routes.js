const {Router} = require('express');
const {getPacientes,getPacientePorFechaVacunacion,getCantidadPacientes} = require('../controller/paciente.controller');

const router = Router();

/* 

Ruta:  /api/pacientes

 */
router.post('/cantidad',getCantidadPacientes)
router.post('/',getPacientes)
router.post('/fechavacunacion',getPacientePorFechaVacunacion)


module.exports = router;