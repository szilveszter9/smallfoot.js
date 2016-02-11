// _math
//
var curry = require('./base/_curry');

var not = curry(function _not(x){return !x});
var add = curry(function _add(inc,x){ return x+inc;});
var addLeft = curry(function _add(inc,x){ return inc+x;});

var math = {
    not,
    add,
    addLeft
};

module.exports = math;
