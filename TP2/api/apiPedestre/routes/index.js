var express = require('express');
var router = express.Router();
var Pedestres = require('../controllers/pedestre.js')

var axios = require('axios')

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

router.post('/pedestres', function(req, res, next) {
  Pedestres.createPedestre(req.body)
  .then(dados =>{res.jsonp(dados)})
  .catch(erro => res.write(erro))
});


router.put('/pedestres/:id', function(req, res, next) {

  Promise.all([Pedestres.updatePedestre(req.params.id, req.body),
               axios.post('http://localhost:3050/historico/' + 'pedestre', {idPedestre: req.params.id, latitude: req.body.latitude, longitude: req.body.longitude})])
         .then(([a, b]) => res.jsonp({Sucess :  true}) )
         .catch(([e1,e2]) => res.status(500).jsonp('error'))
  
                
});



router.delete('/pedestres/:id', function(req, res, next) {
  Pedestres.remove(req.params.id)
  .then(dados =>{res.jsonp(dados)})
  .catch(erro => res.write(erro))
});


module.exports = router;
