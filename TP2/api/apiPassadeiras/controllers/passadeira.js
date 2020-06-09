
const Passadeira = require("../models/passadeira.js");
const Passadeiras = module.exports
const PassadeirasPedestre = require("../models/passadeirapedestre.js")
const PassadeirasVeiculo = require("../models/passadeiraveiculo.js")

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


  ///////////////// Pedestres

  Passadeiras.createPassadeiraPedestre = (p) => {
    return PassadeirasPedestre.createPassadeiraPedestre(p);
  }

  Passadeiras.getAllPassadeiraPedestre = () => {
    return PassadeirasPedestre.getAllPassadeiraPedestre();
  }

  Passadeiras.removePassadeiraPedestre = (p) => {
    return PassadeirasPedestre.removePassadeiraPedestre(p);
  }

  Passadeiras.getAllCountPedestres = (id) => {
    return PassadeirasPedestre.getAllCountPedestres(id);
  }

  ///////////////// Veiculos

  Passadeiras.createPassadeiraVeiculo = (p) => {
    return PassadeirasVeiculo.createPassadeiraVeiculo(p);
  }

  Passadeiras.getAllPassadeiraVeiculo = () => {
    return PassadeirasVeiculo.getAllPassadeiraVeiculo();
  }

  Passadeiras.removePassadeiraVeiculo = (p) => {
    return PassadeirasVeiculo.removePassadeiraVeiculo(p);
  }