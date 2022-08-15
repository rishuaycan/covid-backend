/* 
    Path: '/api/todo/:busqueda'
*/

const {Router} = require('express');
const { busquedaTotal } = require('../controller/busqueda-todo-controller');
const { validarJWT } = require('../middlewares/validar-jwt.middleware');

const router = Router();


router.get('/:termino',validarJWT, busquedaTotal);


module.exports = router;