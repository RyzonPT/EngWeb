var express = require('express');
var router = express.Router();

var axios = require('axios')

var apiPedestres = 'http://localhost:3052/pedestres/'
var apiPassadeira = 'http://localhost:3051/passadeiras/'
/*  Path:   /pedestres */


router.get('/passadeiras', function(req, res, next) {
  axios.get(apiPedestres + 'passadeiras')
       .then(dados => res.jsonp(dados.data))
       .catch(error => res.status(500).jsonp(error) )
});

router.put('/passadeiras/:id', function(req, res, next) {   
  axios.put(apiPedestres + 'passadeiras/' + req.params.id, req.body)
    .then(dados => res.jsonp(dados.data))
    .catch(error => res.status(500).jsonp(error) )
});


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
    console.log("Distancia: " + req.body.dist)
    axios.put(apiPedestres + req.params.id, req.body)
      .then(dados => res.jsonp(dados.data))
      .catch(error => res.status(500).jsonp(error) )
  });
  
  router.delete('/:id', function(req, res, next) {
    axios.delete(apiPedestres + req.params.id)
        .then(dados => res.jsonp(dados.data))
        .catch(error => res.status(500).jsonp(error) )
  });

  

  module.exports = router;