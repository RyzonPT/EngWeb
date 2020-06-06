var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');

var pedestreRouter = require('./routes/pedestres')
var veiculoRouter = require('./routes/veiculos');
var passadeiraRouter = require('./routes/passadeiras');
var historicoRouter = require('./routes/historico');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/historico', historicoRouter);
app.use('/veiculos', veiculoRouter);
app.use('/passadeiras', passadeiraRouter);
app.use('/pedestres', pedestreRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
