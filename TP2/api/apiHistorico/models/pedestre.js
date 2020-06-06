const mongoose = require('mongoose')
var Schema = mongoose.Schema

var pedestreSchema = new Schema({
    latitude : {type : Number},
    longitude : {type: Number},
    idPedestre: {type: Number},
    data : {type: Date}
})

module.exports = mongoose.model('pedestres', pedestreSchema)
