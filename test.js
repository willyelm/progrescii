'use strict';

const Progress = require('./lib/progress');
// Create a instance and render the progress bar

Progress.config({
  template: 'Retrieving Information [:b] :p% in :ts',
  pending: ' ',
  complete: '=',
  size: 20
});

var p = Progress
  .create({
    total: 11
  });

setTimeout(function(){
  p.update(10);
}, 500)
