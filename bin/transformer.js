#! /usr/bin/env node

var fs = require('fs');
var graphicMagick = require('gm').subClass({
  imageMagick: true
});
var mkdirp = require('mkdirp');

var transformations = getTransformations(process.argv);
var files = getFiles(process.argv);
var outPutDirectory = getOutputDirectory(process.argv);
generateOutputDirectory(outPutDirectory, run);

function getTransformations(args){
  return args.slice(args.indexOf('--') + 1);  
}

function getFiles(args){
  return args.slice(2, args.indexOf('--') - 1);
}

function getOutputDirectory(args){
  return args[args.indexOf('--') - 1];
}

function generateOutputDirectory(path, cb){
  mkdirp(path, function(err){
    if(err) console.error(err);
    else cb();
  })
}

function run(){
  transformations = transformations.map(function(el) {
    var entries = el.split('=');
    return {
      command: entries[0],
      value: entries[1]
    }
  });

  files.forEach(function(pathname) {
    var attrs = pathname.split('/').pop().match(/(.*)\.(png|jpg|svg|gif)$/);
    var nameWithNoExtension = attrs[1];
    var ext = '.' + attrs[2];

    // apply all transformation to each file
    transformations.forEach(function(el) {
      var newfilename = outPutDirectory + '/' + nameWithNoExtension + '-' + el.command + el.value + ext;
      graphicMagick(pathname)[el.command](el.value).write(newfilename, function(err) {
        if (!err) console.log(newfilename + ' - done');
        else console.error('Error transforming ' + pathname + '... ' + (err && err.message));
      });
    });
  });
}