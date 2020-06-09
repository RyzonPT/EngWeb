var express = require('express');
var router = express.Router();

var axios = require('axios')

/* Path: /historico */

var apiHistorico = 'historico://historico:3050/historico/'

router.get('/pedestres/:id', function(req, res, next) {
    axios.get(apiHistorico + 'pedestres/' + req.params.id)
        .then(dados => res.jsonp(dados.data))
        .catch(error => res.status(500).jsonp(error) )
  });
  
  router.get('/veiculos/:id', function(req, res, next) {
    axios.get(apiHistorico + 'veiculos/' + req.params.id)
        .then(dados => res.jsonp(dados.data))
        .catch(error => res.status(500).jsonp(error) )
  });
  
  router.post('/pedestres', function(req, res, next) {
    axios.get(apiHistorico + 'pedestres/' + req.params.id, req.body)
        .then(dados => res.jsonp(dados.data))
        .catch(error => res.status(500).jsonp(error) )
  });
  
  router.post('/veiculos', function(req, res, next) {
    axios.get(apiHistorico + 'veiculos/' + req.params.id, req.body)
         .then(dados => res.jsonp(dados.data))
         .catch(error => res.status(500).jsonp(error) )
  });

module.exports = router;