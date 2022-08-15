const {response} = require('express');
const Paciente = require('../models/paciente.model');

const busquedaTotal = async(req,res= response) => {

    const {termino} = req.params;
    const regex = new RegExp(termino, 'i');
    
    const pacientes = await Paciente.find({paciente: regex})
    


    res.json({
        ok: true,
        pacientes
    })

}

module.exports = {
    busquedaTotal
}