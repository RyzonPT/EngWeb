var express = require('express');
var router = express.Router();

/* GET Histórico de uma passadeira. */
router.get('/passadeiras/:id', function(req, res, next) {
  res.jsonp(1)
});

router.get('/pedestres/:id', function(req, res, next) {
  res.jsonp(1)
});

router.get('/veiculos/:id', function(req, res, next) {
  res.jsonp(1)
});

router.post('/pedestre', function(req, res, next) {
  res.jsonp(1)
});

router.post('/veiculo', function(req, res, next) {
  res.jsonp(1)
});

router.post('/passadeira', function(req, res, next) {
  res.jsonp(1)
});

router.delete('/passadeiras/:id', function(req, res, next) {
  res.jsonp(1)
});

router.delete('/pedestres/:id', function(req, res, next) {
  res.jsonp(1)
});

router.delete('/veiculos/:id', function(req, res, next) {
  res.jsonp(1)
});

module.exports = router;
