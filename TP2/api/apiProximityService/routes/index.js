var express = require('express');
var router = express.Router();

/* Verificar se o veículo pode passar. */
router.get('/veiculos/:id', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Verificar se o pedestre pode passar. */
router.get('/pedestres/:id', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
