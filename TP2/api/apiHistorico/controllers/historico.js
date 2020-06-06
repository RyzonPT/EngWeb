var Pedestre = require('../models/pedestre')
var Veiculo = require('../models/veiculo') 

const Historico = module.exports

var ObjectId = require('mongodb').ObjectID

Historico.getHistoricoPedestre = (id) => {
    return Pedestre
            .find({"idPedestre" : id})
            .exec()
}

Historico.getHistoricoVeiculo = (id) => {
    return Veiculo
            .find({"idVeiculo" : id})
            .exec()
}

Historico.addVeiculoInfo = (info) => {
    var info = new Veiculo(info)
    return info.save()
}

Historico.addPedestreInfo = (info) => {
    var info = new Pedestre(info)
    return info.save()
}
