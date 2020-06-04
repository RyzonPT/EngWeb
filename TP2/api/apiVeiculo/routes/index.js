var express = require('express');
var router = express.Router();
var Veiculos = require('../controllers/veiculo.js')

router.get('/veiculos', function(req, res, next) {
  Veiculos.listar(req.params.id,req.body)
  .then(dados =>{res.jsonp(dados)})
  .catch(erro => res.write(erro))
});

router.get('/veiculos/:id', function(req, res, next) {
  Veiculos.get(req.params.id)
  .then(dados =>{res.jsonp(dados)})
  .catch(erro => res.write(erro))
});

router.post('/veiculo', function(req, res, next) {
  Veiculos.create(req.body)
  .then(dados =>{res.jsonp(dados)})
  .catch(erro => res.write(erro))
});

router.put('/veiculos/:id', function(req, res, next) {
  Veiculos.update(req.params.id,req.body)
  .then(dados =>{res.jsonp(dados)})
  .catch(erro => res.write(erro))
});

router.delete('/veiculos/:id', function(req, res, next) {
  Veiculos.remove(req.params.id)
  .then(dados =>{res.jsonp(dados)})
  .catch(erro => res.write(erro))
});

module.exports = router;
