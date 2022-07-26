const {Router} = require('express');
const {getPacientes} = require('../controller/paciente.controller');

const router = Router();

/* 

Ruta:  /api/pacientes

 */
router.get('/',getPacientes)

module.exports = router;