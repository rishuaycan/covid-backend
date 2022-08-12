const  {Schema, model} = require('mongoose');

const HospitalSchema = Schema({
    nombre: {
        type:String,
        required: true
    },
    img: {
        type:String,
    },

},{collection: 'Hospitales'})

// Cambiar nombre de la propiedad _id
HospitalSchema.method('toJSON',function () {
    const {__v, _id, ...object} = this.toObject();
    object.uid = _id
    return object;
})

module.exports = model('Usuario',HospitalSchema)