const mongoose = require('mongoose')
var Schema = mongoose.Schema

var veiculoSchema = new Schema({
    idVeiculo: {type: Number},
    latitude : {type : Number},
    longitude : {type: Number},
    idPassadeira: {type: Number},
    data : {type: Date}
})

module.exports = mongoose.model('veiculos', veiculoSchema)
