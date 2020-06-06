
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


