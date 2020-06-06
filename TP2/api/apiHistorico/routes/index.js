var express = require('express');
var router = express.Router();

var Historico = require('../controllers/historico')


router.get('/pedestres/:id', function(req, res, next) {
  Historico.getHistoricoPedestre(req.params.id)
           .then(info => res.jsonp(info))
           .catch(error => res.status(500).jsonp(error))
});

router.get('/veiculos/:id', function(req, res, next) {
  Historico.getHistoricoVeiculo(req.params.id)
           .then(info => res.jsonp(info))
           .catch(error => res.status(500).jsonp(error))
});

router.post('/pedestre', function(req, res, next) {
  var info = req.body
  info.data = new Date()
  Historico.addPedestreInfo(info)
           .then(info => res.jsonp(info))
           .catch(error => res.status(500).jsonp(error))
});

router.post('/veiculo', function(req, res, next) {
  var info = req.body
  info.data = new Date()
  Historico.addVeiculoInfo(info)
           .then(info => res.jsonp(info))
           .catch(error => res.status(500).jsonp(error))
});


module.exports = router;
