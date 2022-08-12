const {response } = require('express');

const getHospital = (req, res=response)=> {

    res.json({
        ok: true,
        msg: 'getHospital'
    })
}
const createHospital = (req, res=response)=> {

    res.json({
        ok: true,
        msg: 'Crear Hospital'
    })
}
const updateHospital = (req, res=response)=> {

    res.json({
        ok: true,
        msg: 'actualizar Hospital'
    })
}
const deleteHospital = (req, res=response)=> {

    res.json({
        ok: true,
        msg: 'borrar Hospital'
    })
}

module.exports = {
    getHospital,
    createHospital,
    updateHospital,
    deleteHospital
}
