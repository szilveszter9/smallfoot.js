'use strict';
// _map
//
var curry = require('./_curry');
var map = curry(function _map(f, obj){return obj.map(f)});

module.exports = map;
