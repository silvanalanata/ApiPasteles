const mongoose = require('mongoose')


const calificaciones = new mongoose.Schema({
    nota:  {type: Number, require: [true, 'nota obligatorio']},
    comentario: {type: String, require: [true, 'comentario obligatorio']},
   
})

const pasteles = new mongoose.Schema({
    pastelero:  {type: String, require: [true, 'nombre obligatorio']},
    imagen: {type: String, require: [true, 'imagen obligatorio']},
    calificaciones :[calificaciones]
//
})
const ApiPastel = mongoose.model('apipastel',pasteles)
const ApiCalif = mongoose.model('apicalificaciones',calificaciones)
module.exports = {ApiPastel, ApiCalif}
