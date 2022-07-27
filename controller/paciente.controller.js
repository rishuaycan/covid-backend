const Paciente = require('../models/paciente.model')
const fs = require("JSONStream");

const getPacientes = async (req, res) => {
    const pacientes = await Paciente.find({establecimiento:'AMAUTA'}); 
    // const pacientes2 = await Paciente.find({establecimiento:'EL EXITO'}); 
    res.json({
        ok: true,
        pacientes
    })
}

module.exports = {
    getPacientes
}