var express = require('express');
var router = express.Router();

/* GET Passadeiras. */
router.get('/passadeiras', function(req, res, next) {
  res.jsonp(1)
});

router.get('/passadeiras/:id', function(req, res, next) {
  res.jsonp(1)
});

router.post('/passadeira', function(req, res, next) {
  res.jsonp(1)
});

router.put('/passadeiras/:id', function(req, res, next) {
  res.jsonp(1)
});

router.delete('/passadeiras/:id', function(req, res, next) {
  res.jsonp(1)
});


module.exports = router;
