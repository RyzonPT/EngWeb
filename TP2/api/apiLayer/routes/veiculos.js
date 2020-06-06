var express = require('express');
var router = express.Router();

var axios = require('axios')

/*  Path:   /veiculos */

var apiVeiculo = 'http://localhost:3055/veiculos/'

router.get('/', function(req, res, next) {
    axios.get(apiVeiculo)
         .then(dados => res.jsonp(dados.data))
         .catch(error => res.status(500).jsonp(error) )
  });
  
router.get('/:id', function(req, res, next) {
    axios.get(apiVeiculo + req.params.id)
        .then(dados => res.jsonp(dados.data))
        .catch(error => res.status(500).jsonp(error) )
});
  
  router.post('/', function(req, res, next) { 
    axios.post(apiVeiculo, req.body)
        .then(dados => res.jsonp(dados.data))
        .catch(error => res.status(500).jsonp(error) )
  });
  
  router.put('/:id', function(req, res, next) {
    axios.put(apiVeiculo + req.params.id, req.body)
        .then(dados => res.jsonp(dados.data))
        .catch(error => res.status(500).jsonp(error) )
  });
  
  router.delete('/:id', function(req, res, next) {
    axios.get(apiVeiculo + req.params.id)
        .then(dados => res.jsonp(dados.data))
        .catch(error => res.status(500).jsonp(error) )
  });



module.exports = router;