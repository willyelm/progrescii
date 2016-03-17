'use strict';

const Progress = require('./lib/progress');

//Global Config
Progress.config({
  pending: '░',
  complete: '█'
});
//Instance
Progress
  .create({
    size: 20,
    total: 100
  })
  .update(50);
