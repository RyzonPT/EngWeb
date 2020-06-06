const mongoose = require('mongoose')
var Schema = mongoose.Schema

var veiculoSchema = new Schema({
    latitude : {type : Number},
    longitude : {type: Number},
    idVeiculo: {type: Number},
    data : {type: Date}
})

module.exports = mongoose.model('veiculos', veiculoSchema)
