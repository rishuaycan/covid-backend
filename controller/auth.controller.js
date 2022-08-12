const Usuario = require('../models/usuario.model');
const { response} = require('express');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');


const login = async (req, res= response) => {

    const {email, password} = req.body;
    try {
        console.log(password);
       const usuarioDB = await Usuario.findOne({email});
        console.log(usuarioDB);
    // Verificar email
       if (!usuarioDB) {
            return res.status(404).json({
                ok:false,
                msg:'Credenciales incorrectas(Email)'
            })
       }

       // Verificar contraseña
       const validPassword = bcrypt.compareSync(password,usuarioDB.password);
       if(!validPassword){
        return res.status(400).json({
            ok: false,
            msg: 'Credenciales incorrectas(Password)'
        })
       }
       
       // Generar el Token - JWT
       const token =  await generarJWT(usuarioDB.id);
       res.json({
        ok: true,
        token
       })

        
    } catch (error) {
        res.status(500).json({
            ok:false,
            msg: 'Hable con el Administrador'
        })
    }
}


module.exports = {
    login
}