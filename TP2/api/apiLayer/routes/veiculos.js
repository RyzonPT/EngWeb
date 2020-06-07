var express = require('express');
var router = express.Router();

var axios = require('axios')

/*  Path:   /veiculos */

var apiVeiculo = 'http://localhost:3055/veiculos/'
var apiPassadeira = 'http://localhost:3051/passadeiras/'


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
    /*Promise.all([axios.get(apiPassadeira + 'veiculos/' + req.body.latitude + '/' + req.body.longitude),
                 axios.put(apiVeiculo + req.params.id, req.body)])
    .then(([semaforo, veiculo]) => {res.jsonp(semaforo)})
    .catch(([e1, e2]) => {res.status(500).jsonp('erro')})   */
    
    axios.get(apiPassadeira + 'veiculos/' + req.body.latitude + '/' + req.body.longitude)
         .then(semaforo =>{
           console.log(semaforo)
              axios.put(apiVeiculo + req.params.id, req.body)
                   .then(() => { res.jsonp(semaforo.data)})
                 .catch(error => res.status(500).jsonp(error) )
            
         })
         .catch(error => res.status(500).jsonp(error))
    
  });
  
  router.delete('/:id', function(req, res, next) {
    axios.get(apiVeiculo + req.params.id)
        .then(dados => res.jsonp(dados.data))
        .catch(error => res.status(500).jsonp(error) )
  });



module.exports = router;