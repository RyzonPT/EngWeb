var express = require('express');
var router = express.Router();
var axios = require('axios')
var geolib = require('geolib')
var Passadeiras = require('../controllers/passadeira')
var apiLayer = 'http://localhost:4000/'


// recebe o veiculo ou pedestre e as passsadeiras
getPassadeiraProxima = function(passadeiras, utilizador){
  return new Promise(function(resolve, reject) {
    var result
    var length = passadeiras.length;
    var i = 0;
    var distance = Number.MAX_SAFE_INTEGER
    passadeiras.forEach(pass => {
        var distanceAtual = geolib.getDistance(utilizador, pass)
        if(distanceAtual < 5 && distanceAtual < distance ) {distance = distanceAtual; result = pass}
        console.log(result)
        ++i;
        if(i == length) { console.log(result) ; resolve(result)}
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
          if(distance < 5) result.push(u) 
          i++;
          if(i == length) resolve(result)
      })
  })
}

router.get('/passadeiras/veiculos', function(req, res, next) {
  var veiculo = {
    latitude : req.body.latitude,
    longitude : req.body.longitude
  }
  var response = res
  Passadeiras.listar()
    .then(passadeiras =>{
      axios.get(apiLayer + 'pedestres')
                     .then(pedestres => {
                       getPassadeiraProxima(passadeiras, veiculo)
                        .then(passadeira => {
                          console.log("r" + passadeira)
                          proximityCalculator(passadeira, pedestres.data)
                          .then(result => {
                            response.jsonp(result)
                          })
                          .catch(error=> response.status(500).jsonp(error))
                        })
                     })
                     .catch(error => response.status(500).jsonp(error))
    })
    .catch(erro => response.write(erro))
})

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
})

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
