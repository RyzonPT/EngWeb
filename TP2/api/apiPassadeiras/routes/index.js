var express = require('express');
var router = express.Router();
var axios = require('axios')
var geolib = require('geolib')
var Passadeiras = require('../controllers/passadeira')
var apiLayer = 'http://localhost:3052/'

getSemaforo = function(pedestres){
  return new Promise(function(resolve, reject) {
    if(pedestres.length == 0){
      resolve({semaforo: 1})
    }
    else{
      resolve({semaforo: 0})
    }
  })
}

// recebe o veiculo e as passsadeiras
getPassadeiraProxima = function(passadeiras, utilizador){
  return new Promise(function(resolve, reject) {
    var result = null
    var length = passadeiras.length;
    var i = 0;
    var distance = Number.MAX_SAFE_INTEGER
    passadeiras.forEach(pass => {
        var distanceAtual = geolib.getDistance(utilizador, pass)
        if(distanceAtual < 50 && distanceAtual < distance ) {distance = distanceAtual; result = pass}
        ++i;
        if(i == length) { resolve( result)}
    })
  })

} 


proximityCalculator = function(passadeira, utilizadores){
  return new Promise(function(resolve, reject) {
      var length = utilizadores.length;
      var i = 0;
      var result = []
      
      utilizadores.forEach(u =>{
          var distance = geolib.getDistance(passadeira, u)
          if(distance < 50){ result.push(u) }
          i++;
          if(i == length) resolve(result)
      })
  })
}


router.get('/passadeiras/veiculos/:latitude/:longitude', function(req, res, next) {
  var veiculo = {
    latitude : req.params.latitude,
    longitude : req.params.longitude
  }
  var response = res
  
  Passadeiras.listar()
    .then(passadeiras =>{
      axios.get(apiLayer + 'pedestres')
                     .then(pedestres => {
                       getPassadeiraProxima(passadeiras, veiculo)
                        .then(passadeira => {
                          if(passadeira == null){
                            res.jsonp({semaforo:1})
                          }
                          else{
                            proximityCalculator(passadeira, pedestres.data)
                            .then(pedestresPassadeira => {

                              getSemaforo(pedestresPassadeira)
                              .then(result=>{
                                response.jsonp(result)
                              })
                              .catch(error => response.status(500).jsonp(error))

                            })
                            .catch(error=> response.status(500).jsonp(error))
                          }
                        })
                     })
                     .catch(error => response.status(500).jsonp(error))
    })
    .catch(erro => response.write(erro))
})
/*
router.get('/passadeiras/pedestres', function(req, res, next) {
  var pedestre = {
    latitude : req.body.latitude,
    longitude : req.body.longitude
  }
  var response = res
  Passadeiras.listar()
    .then(passadeiras =>{
      axios.get(apiLayer + 'veiculos')
                     .then(veiculos => {
                       getPassadeiraProxima(passadeiras, pedestre)
                        .then(passadeira => {
                          proximityCalculator(passadeira, veiculos.data)
                          .then(result => {
                            response.jsonp(result)
                          })
                          .catch(error=> response.status(500).jsonp(error))
                        })
                     })
                     .catch(error => response.status(500).jsonp(error))
    })
    .catch(erro => response.write(erro))
})*/

/* GET Passadeiras. */
router.get('/passadeiras', function(req, res, next) {
  Passadeiras.listar()
    .then(dados =>{res.jsonp(dados)})
    .catch(erro => res.write(erro))
});

router.get('/passadeiras/:id', function(req, res, next) {
  Passadeiras.get(req.params.id)
    .then(dados =>{res.jsonp(dados)})
    .catch(erro => res.write(erro))
});

router.post('/passadeiras', function(req, res, next) {
  Passadeiras.create(req.body)
    .then(dados =>{res.jsonp(dados)})
    .catch(erro => res.write(erro))
});

router.put('/passadeiras/:id', function(req, res, next) {
  Passadeiras.update(req.params.id, req.body)
    .then(dados =>{res.jsonp(dados)})
    .catch(erro => res.write(erro))
});

router.delete('/passadeiras/:id', function(req, res, next) {
  Passadeiras.remove(req.params.id)
    .then(dados =>{res.jsonp(dados)})
    .catch(erro => res.write(erro))
});


module.exports = router;
