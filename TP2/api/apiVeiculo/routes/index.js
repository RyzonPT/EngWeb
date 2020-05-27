var express = require('express');
var router = express.Router();

router.get('/veiculos', function(req, res, next) {
  res.jsonp(1)
});

router.get('/veiculos/:id', function(req, res, next) {
  res.jsonp(1)
});

router.post('/veiculo', function(req, res, next) {
  res.jsonp(1)
});

router.put('/veiculos/:id', function(req, res, next) {
  res.jsonp(1)
});

router.delete('/veiculos/:id', function(req, res, next) {
  res.jsonp(1)
});

module.exports = router;
