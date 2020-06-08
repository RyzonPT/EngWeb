
const Passadeira = require("../models/passadeira.js");
const Passadeiras = module.exports

Passadeiras.listar = () => {
    return Passadeira.getAll();
  };

  Passadeiras.get = (id) => {
    return Passadeira.get(id);
  };

  Passadeiras.create = (v) => {
    return Passadeira.create(v);
  };

  Passadeiras.update = (id,v) => {
    return Passadeira.update(id,v);
  };

  Passadeiras.remove = (id) => {
    return Passadeira.remove(id);
  };


  Passadeiras.createPassadeiraPedestre = (p) => {
    return Passadeira.createPassadeiraPedestre(p);
  }

  Passadeiras.getAllPassadeiraPedestre = () => {
    return Passadeira.getAllPassadeiraPedestre();
  }

  Passadeiras.removePassadeiraPedestre = (p) => {
    return Passadeira.removePassadeiraPedestre(p);
  }



  Passadeiras.createPassadeiraVeiculo = (p) => {
    return Passadeira.createPassadeiraVeiculo(p);
  }

  Passadeiras.getAllPassadeiraVeiculo = () => {
    return Passadeira.getAllPassadeiraVeiculo();
  }

  Passadeiras.removePassadeiraVeiculo = (p) => {
    return Passadeira.removePassadeiraVeiculo(p);
  }