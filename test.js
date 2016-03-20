'use strict';

const Progress = require('./lib/progress');
// Create a instance and render the progress bar

// Progress.config({
//   template: 'Retrieving Information [:b] :p% in :ts',
//   pending: ' ',
//   complete: '='
// });

var p = Progress.create({
  total: 100
});

setTimeout(function(){
  p.update(20);
  setTimeout(function(){
    p.update(40);
  }, 500)
}, 500)
