const {Router} = require('express');
const {getUsuarios} = require('../controller/usuario.controller');

const router = Router();

/* 

Ruta:  /api/usuarios

 */
router.get('/',getUsuarios)



module.exports = router;