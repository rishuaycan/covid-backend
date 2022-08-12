const {Router} = require('express');
const {getUsuarios, createUsuarios, updateUsuarios, deleteUsuario} = require('../controller/usuario.controller');
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt.middleware');

const router = Router();    

/* 

Ruta:  /api/usuarios

 */
router.get('/',validarJWT,getUsuarios)
router.post('/',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password','El password es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    validarCampos
],createUsuarios)

router.put('/:id', 
[
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('role', 'El role es obligatorio').not().isEmpty(),
    validarCampos
],updateUsuarios)

router.delete('/:id',validarJWT,deleteUsuario)



module.exports = router;