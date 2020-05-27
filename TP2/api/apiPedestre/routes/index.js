var express = require('express');
var router = express.Router();

router.get('/pedestres', function(req, res, next) {
  res.jsonp(1)
});

router.get('/pedestres/:id', function(req, res, next) {
  res.jsonp(1)
});

router.post('/pedestre', function(req, res, next) {
  res.jsonp(1)
});

router.put('/pedestres/:id', function(req, res, next) {
  res.jsonp(1)
});

router.delete('/pedestres/:id', function(req, res, next) {
  res.jsonp(1)
});


module.exports = router;
