'use strict';

const _ = require('lodash');
const colors = require('colors/safe');

const ProgressBar = {

  init(options){

    this.startTime = process.hrtime();
    this.size = options.size;
    this.total = options.total;
    this.template = options.template;
    this.progress = options.progress;
    this.charComplete = options.complete;
    this.charPending = options.pending;
    this.done = false;

    this.render();

    process.on('exit', () => {
      if(!this.done){
        this.newLine();
      }
    });

    return (this);
  },

  newLine(){
    process.stderr.write('\n');
  },

  render(){

    var percent = (this.progress * 100) / this.total;
    var completed = this.size * (percent/100);
    var pending = this.size - completed;
    //█░░░
    var completedBar = _.repeat(this.charComplete, completed);
    var pendingBar = _.repeat(this.charPending, pending);
    var endTime = process.hrtime(this.startTime);
    var totalTime = Number(endTime[0] + (endTime[1] * 1e-9)).toFixed(2);
    //var bar = `Downloading [${completedBar}${pendingBar}] ${percent}% in ${totalTime} seconds`;

    var bar = this
      .template
      .replace(/\:b/, `${completedBar}${pendingBar}`)
      .replace(/\:p/, Number(percent).toFixed(0))
      .replace(/\:t/, totalTime);

    //console.log(bar, percent + '%');
    process.stderr.cursorTo(0);
    process.stderr.write(bar);
    process.stderr.clearLine(1);

    if (this.progress >= this.total) {
      this.done = true;
      this.newLine();
    }
  }
};

var settings = {
  size: 20,
  total: 20,
  progress: 0,
  template: 'Loading :b :p% in :ts',
  complete: colors.white('▪'),
  pending: colors.gray('▫')
};

module.exports = {
  colors: colors,
  config(options){
    _.extend(settings, options);
  },
  create(){

    var options = _.defaults(_.get(arguments, 0),
      settings);

    return Object
      .create(ProgressBar, {
        update: {
          value(size){
            this.progress += size;
            this.render();
          }
        }
      })
      .init(options);
  }
};
