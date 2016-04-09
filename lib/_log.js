'use strict';
// _log
//
var curry = require('./base/_curry');

var log = function(global){
  var obj = curry(function _log(s){global.console.log(s);return arguments;});
  var args = curry(function _log(s){if(this!==undefined && this!=global.window){global.console.log('this:',this);};global.console.log('arguments:',arguments);return arguments;});
  var log = args;
  var value = curry(function _log(s){global.console.log(s && s.toString());return arguments;});
  var part = curry(function _log(partFunc,s){global.console.log(partFunc(s).toString());return s;});

  return log = {
      obj: obj,
      args: args,
      log: log,
      value: value,
      part: part
  };
};

module.exports = log;
