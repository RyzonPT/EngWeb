
const Veiculo = require("../models/veiculo.js");
const Veiculos = module.exports

Veiculos.listar = () => {
    return Veiculo.getAll();
  };

  Veiculos.get = (id) => {
    return Veiculo.get(id);
  };

  Veiculos.create = (v) => {
    return Veiculo.create(v);
  };

  Veiculos.update = (id,v) => {
    return Veiculo.update(id,v);
  };

  
  Veiculos.updatePassadeira = (idVeiculo,idPassadeira) => {
    return Veiculo.updatePassadeira(idVeiculo,idPassadeira);
  };

  Veiculos.getVeiculosPassadeira = () => {
    return Veiculo.getVeiculosPassadeira();
  };

  Veiculos.remove = (id) => {
    return Veiculo.remove(id);
  };


