
const bcrypt = require('bcryptjs');
const {response } = require('express');
const Usuario = require('../models/usuario.model');
const { generarJWT } = require('../helpers/jwt');

const getUsuarios = async (req, res) => {

    const usuarios = await Usuario.find({}, 'nombre email role google');
    res.json({
        ok:true,
        usuarios,
        uid: req.uid
    })
}


const createUsuarios = async(req, res= response) => {
    //Como Leo el body
    console.log(req.body);
    const {password, email} = req.body;

    try {
        const existeEmail = await Usuario.findOne({email})
        if (existeEmail) {
            return res.status(400).json({
                ok:false,
                msg: 'Email Registrado'
            });
        }
        const usuario = new Usuario(req.body);
        //Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password= bcrypt.hashSync(password, salt);

        //Guardar Usuario
        await usuario.save();
        const token =  await generarJWT(usuario.id);

        res.json({
           ok:true,
           usuario,
           token
        })

    } catch (error) {
        res.status(500).json({
            ok:false,
            msg: 'Error inesperado'
        })
    }
}


const updateUsuarios = async (req, res= response) => {
    
     // TO DO : Validar token y comprobar si es el usuario correcto
     const uid = req.params.id;

    try {

        const usuarioDB = await Usuario.findById(uid);
        if (!usuarioDB) {
            return res.status(404).json({
                ok:false,
                msg: 'No existe un usuario con ese ID'
            });
        }
        const {password,google,email, ...campos}= req.body;

        if (usuarioDB.email !== email) {
            const existeEmail = await Usuario.findOne({email});
            if (existeEmail) {
                return res.status(400).json({
                    ok:false,
                    msg: 'Ya existe un usuario con ese Email'
                }) 
            }  
        }
        campos.email = email;
        //Actualizar
        const usuarioActualizado = await Usuario.findByIdAndUpdate(uid, campos,{new: true});

        res.json({
            ok: true,
            usuario: usuarioActualizado
        })
    } catch (error) {
       console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error Inesperado al actualizar'
        })
    }
}

const deleteUsuario = async(req, res= response) => {
    const uid = req.params.id;

    try {

        const usuarioDb = await Usuario.findById(uid);

        if (!usuarioDb) {
            return res.status(404).json({
                ok:false,
                msg: 'Usuario no existe'
            })
        
        } else {
            await Usuario.findByIdAndDelete(uid);
            return res.status(400).json({
                ok:true,
                msg: 'Usuario eliminado'
            })
        }
    
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error Inesperado al eliminar'
        })
        
    }
    


}


module.exports = {
    getUsuarios,
    createUsuarios,
    updateUsuarios,
    deleteUsuario
}