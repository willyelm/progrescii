'use strict';

const Progress = require('./lib/progress');
// Create a instance and render the progress bar

// Progress.config({
//   template: 'Retrieving Information [:b] :p% in :ts',
//   pending: ' ',
//   complete: '='
// });

var p = Progress.create({
  total: 0
});

setTimeout(function(){
  p.step(20, 50);
  setTimeout(function(){
    p.step(40, 50);
  }, 500)
}, 500)
