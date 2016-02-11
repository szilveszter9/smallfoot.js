// _log
//
var curry = require('./base/_curry')

var obj = curry(function _log(s){console.log(s);return arguments;});
var args = curry(function _log(s){if(this!==undefined && this!=window){console.log('this:',this);};console.log('arguments:',arguments);return arguments;});
var log = args;
var value = curry(function _log(s){console.log(s && s.toString());return arguments;});
//var logObj = ... see above
var part = curry(function _log(partFunc,s){console.log(partFunc(s).toString());return s;});

var log = {
    obj,
    args,
    log,
    value,
    part
};

module.exports = log;
