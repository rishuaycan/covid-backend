const Usuario = require('../models/usuario.model')
const getUsuarios = async (req, res) => {

    const usuarios = await Usuario.find({}, 'nombre email role google');
    res.json({
        ok:true,
        usuarios
    })
}


const createUsuarios = async(req, res) => {
    //Como Leo el body
    console.log(req.body);

    const {nombre, password, email} = req.body;

    const usuario = new Usuario(req.body);

    await usuario.save();

    res.json({
        ok:true,
       usuario
    })
}


module.exports = {
    getUsuarios,
    createUsuarios
}