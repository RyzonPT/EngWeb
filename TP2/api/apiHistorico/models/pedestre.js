const mongoose = require('mongoose')
var Schema = mongoose.Schema

var pedestreSchema = new Schema({
    idPedestre: {type: Number},
    latitude : {type : Number},
    longitude : {type: Number},
    data : {type: Date}
})

module.exports = mongoose.model('pedestres', pedestreSchema)
