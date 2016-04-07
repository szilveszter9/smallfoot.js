'use strict';
// _string
//
var math = require('./_math');
var array = require('./_array');
var curry = require('./base/_curry');
var json = require ('./_json');

var cat = curry(function _cat(a,b){return '' + a + b;});
var tac = curry(function _cat(a,b){return '' + b + a;});
var split = curry(function _split(splitter,str){return String.prototype.split.call(str,splitter);});
var trim = curry(function _trim(s){return String.prototype.trim.call(s);});
var upper = curry(function _upper(s){return String.prototype.toUpperCase.call(s);});
var toArray = function _str2arr(str){return array.slice(0)(str.length, str)};

var string = {
    cat: cat,
    tac: tac,
    split: split,
    trim: trim,
    upper: upper,
    toArray: toArray,
    toJSON: json.toJSON
};

module.exports = string;
