var express = require('express');
var router = express.Router();

var axios = require('axios')

/*  Path:   /veiculos */

var apiVeiculo = 'http://localhost:3055/veiculos/'
var apiPassadeira = 'http://localhost:3051/passadeiras/'
var apiPedestre = 'http://localhost:3052/pedestres/'


router.get('/passadeiras', function(req, res, next) {
  axios.get(apiVeiculo + 'passadeiras')
       .then(dados => res.jsonp(dados.data))
       .catch(error => res.status(500).jsonp(error) )
});

router.put('/passadeiras/:id', function(req, res, next) {
  axios.put(apiVeiculo + 'passadeiras/' + req.params.id, req.body)
  .then(dados => {  res.jsonp(dados.data)})
  .catch(error => res.status(500).jsonp(error) )
});

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

    
      axios.get(apiPassadeira + 'semaforo/' + req.body.idPassadeira)
      .then(semaf => {
        axios.get(apiPedestre + 'passadeiras/'+ req.body.idPassadeira)
        .then(cnt => {
          axios.put(apiVeiculo + req.params.id, req.body)
           .then(() => { 
            if(cnt.data > 0){
              res.jsonp({semaforo:semaf.data, count: 1})
            }
            else{
              res.jsonp({semaforo:semaf.data, count: 0})
            }
             })
           .catch(error => res.status(500).jsonp(error) )
        })
      })
      .catch(error => res.status(500).jsonp(error) )

  });
  
  router.delete('/:id', function(req, res, next) {
    axios.delete(apiVeiculo + req.params.id)
        .then(dados => res.jsonp(dados.data))
        .catch(error => res.status(500).jsonp(error) )
  });



module.exports = router;