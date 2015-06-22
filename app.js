var express = require('express');
var logger = require('morgan');
var app = express();

app.use(logger('dev'));
app.get('/suicide', function() {
  process.nextTick(function() {
    throw new Error('suicide');
  });
});

module.exports = app;
