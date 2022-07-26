const {Router} = require('express');
const {getUsuarios, createUsuarios} = require('../controller/usuario.controller');

const router = Router();

/* 

Ruta:  /api/usuarios

 */
router.get('/',getUsuarios)
router.post('/',createUsuarios)



module.exports = router;