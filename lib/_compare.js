// _compare
//
var curry = require('./base/_curry');
var math = require('./_math');

var isEqual = curry(function _isEqual(x, y){return x===y;});
var isNot = math.not;
var isEven = curry(function _isEven(i){return i%2===0;});
var isOdd = curry(function _isOdd(i){return i%2===1;});

var compare = {
    isEqual: isEqual,
    isNot: isNot,
    isEven: isEven,
    isOdd: isOdd
};

module.exports = compare;
