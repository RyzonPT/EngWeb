var express = require('express');
var router = express.Router();
var Pedestres = require('../controllers/pedestre.js')

router.get('/pedestres', function(req, res, next) {
  Pedestres.listar()
  .then(dados =>{res.jsonp(dados)})
  .catch(erro => res.write(erro))
});

router.get('/pedestres/:id', function(req, res, next) {
  Pedestres.getPedestre(req.params.id)
  .then(dados =>{res.jsonp(dados)})
  .catch(erro => res.write(erro))
});

router.post('/pedestre', function(req, res, next) {
  Pedestres.createPedestre(req.body)
  .then(dados =>{res.jsonp(dados)})
  .catch(erro => res.write(erro))
});

router.put('/pedestres/:id', function(req, res, next) {
  Pedestres.updatePedestre(req.params.id,req.body)
  .then(dados =>{res.jsonp(dados)})
  .catch(erro => res.write(erro))
});

router.delete('/pedestres/:id', function(req, res, next) {
  Pedestres.remove(req.params.id)
  .then(dados =>{res.jsonp(dados)})
  .catch(erro => res.write(erro))
});


module.exports = router;
