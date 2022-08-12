const Paciente = require('../models/paciente.model')
const fs = require("JSONStream");

const getPacientes = async (req, res) => {
    const {centro} = req.body;

    const [pacientes,total ] = await Promise.all([
        Paciente.find({establecimiento: centro})
                    .limit(300),
        Paciente.count()
    ])
    // const paciente = await Paciente.find({establecimiento:centro})
    //                                 .limit(50);
    // const pacientes2 = await Paciente.find({establecimiento:'EL EXITO'});
    //const pacientesOut = extractLargeJson(pacientes);
    res.json({
        ok: true,
        pacientes,
        total
    })
}
const getCantidadPacientes = async (req, res) => {
    const {centro} = req.body 
    const cantidadVacunados = await Paciente.find({establecimiento:centro}).count(); 
    res.json({
        ok: true,
        paciente:cantidadVacunados
    })
}

const extractLargeJson = (pacientes) =>  {
    let numFiles = 4;
    let largeObject;
    for(let i  = 0; i < numFiles; i++) {
        let out = pacientes.slice((i/numFiles)*pacientes.length, ((i+1)/numFiles)*pacientes.length).map(el => JSON.stringify(el)).join(",");
       largeObject = out;
      }
    return largeObject;
}

const getPacientePorFechaVacunacion = async (req, res) => {
    const {centro,fechaVacunacion} = req.body 

    const pacientes = await Paciente.find({establecimiento:centro, fecha_vacunacion:fechaVacunacion}); 
    // const pacientes2 = await Paciente.find({establecimiento:'EL EXITO'}); 
    res.json({
        ok: true,
        pacientes
    })
}

module.exports = {
    getPacientes,
    getPacientePorFechaVacunacion,
    getCantidadPacientes
}