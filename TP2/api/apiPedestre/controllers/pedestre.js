
const Pedestre = require("../models/pedestre.js");
const Pedestres = module.exports

Pedestres.listar = () => {
    return Pedestre.getAllPedestres();
  };

Pedestres.getPedestre = (id) => {
    return Pedestre.getPedestrebyId(id);
  };

  Pedestres.createPedestre = (pedestre) => {
    return Pedestre.createPedestre(pedestre);
  };

  Pedestres.updatePedestre = (id,pedestre) => {
    return Pedestre.updatePedestre(id,pedestre);
  };

  Pedestres.remove = (id) => {
    return Pedestre.remove(id);
  };


