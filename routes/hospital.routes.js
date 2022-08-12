/* 
    Path: '/api/hospitales'
*/

const {Router} = require('express');
const {getHospital, createHospital, updateHospital, deleteHospital} = require('../controller/hospital.controller');
const { validarJWT } = require('../middlewares/validar-jwt.middleware');

const router = Router();    

router.get('/',validarJWT, getHospital)
router.post('/',[],createHospital)

router.put('/:id', [ validarJWT], updateHospital)

router.delete('/:id',validarJWT,deleteHospital)



module.exports = router;