const Paciente = require('../models/paciente.model')

const getPacientes = (req, res) => {
    res.json({
        ok: true,
        pacientes: []
    })
}

module.exports = {
    getPacientes
}