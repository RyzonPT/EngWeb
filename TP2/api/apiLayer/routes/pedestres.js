var express = require('express');
var router = express.Router();

var axios = require('axios')

var apiPedestres = 'http://localhost:3052/pedestres/'
/*  Path:   /pedestres */

  router.get('/', function(req, res, next) {
    axios.get(apiPedestres)
         .then(dados => res.jsonp(dados.data))
         .catch(error => res.status(500).jsonp(error) )
  });
  
router.get('/:id', function(req, res, next) {
    axios.get(apiPedestres + req.params.id)
        .then(dados => res.jsonp(dados.data))
        .catch(error => res.status(500).jsonp(error) )
});
  
  router.post('/', function(req, res, next) { 
    axios.post(apiPedestres, req.body)
        .then(dados => res.jsonp(dados.data))
        .catch(error => res.status(500).jsonp(error) )
  });
  
  router.put('/:id', function(req, res, next) {
    axios.put(apiPedestres + req.params.id, req.body)
        .then(dados => res.jsonp(dados.data))
        .catch(error => res.status(500).jsonp(error) )
  });
  
  router.delete('/:id', function(req, res, next) {
    axios.get(apiPedestres + req.params.id)
        .then(dados => res.jsonp(dados.data))
        .catch(error => res.status(500).jsonp(error) )
  });

  module.exports = router;