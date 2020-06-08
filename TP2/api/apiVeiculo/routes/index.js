var express = require('express');
var router = express.Router();
var Veiculos = require('../controllers/veiculo.js')

var axios = require('axios')

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

router.post('/veiculos', function(req, res, next) {
  Veiculos.create(req.body)
  .then(dados =>{res.jsonp(dados)})
  .catch(erro => res.write(erro))
});

router.put('/veiculos/:id', function(req, res, next) {
  var veiculo = req.body
  veiculo.idVeiculo = req.params.idVeiculo
  Promise.all([
    Veiculos.update(req.params.id, req.body),
    axios.post('http://localhost:3050/historico/' + 'veiculo', veiculo)
  ])     
    .then(([a,b]) => {res.jsonp({Sucess :  true})} )
    .catch(([e1, e2]) => res.jsonp('error'))
});

router.delete('/veiculos/:id', function(req, res, next) {
  Veiculos.remove(req.params.id)
  .then(dados =>{res.jsonp(dados)})
  .catch(erro => res.write(erro))
});

module.exports = router;
