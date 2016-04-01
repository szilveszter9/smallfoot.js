// _array
//
var math = require('./_math');
var curry = require('./base/_curry');
var compare = require('./_compare');
var compose = require('./base/_compose');

var isEvenKey = function _isEvenKey(val,key){return compare.isEven(key);};
var isOddKey = function _isOddKey(val,key){return compare.isOdd(key);};
var each = curry(function _each(f,arrLike){Array.prototype.forEach.call(arrLike,f); return arrLike;});
//each = curry(function _each(f,arr){for(var i=0;i<arr.length;i++){f(arr[i],i,arr)};});
var some = curry(function _some(f,arrLike){return Array.prototype.some.call(arrLike,f);});
var any = some;
var contains = curry(function _contains(given,arrLike){return some(function(elem){return elem===given},arrLike);});
var inRange = curry(function _inRange(range,val){return any(compare.isEqual(val), range);});
var notAny = compose(math.not, any);
var notInRange = compose(math.not, inRange);
var filter = curry(function _filter(f,arrLike){return Array.prototype.filter.call(arrLike,f);});
var foldl = curry(function _foldl(f,start,arrLike){return Array.prototype.reduce.call(arrLike,f,start); });
var nth = curry(function _nth(n,arrLike){return arrLike[n];})
var reverse = curry(function _reverse(arr){return Array.prototype.reverse.call(arr);});
var reduce = foldl;
var slice = curry(function _slice(from,till,arr){return Array.prototype.slice.call(arr,from,till);});
var head = nth(0);
var headN = function _headN(n){return slice(0,n);};
var toString = foldl(math.addLeft)('');

var array = {
    isEvenKey: isEvenKey,
    isOddKey: isOddKey,
    each: each,
    some: some,
    any: any,
    contains: contains,
    inRange: inRange,
    notAny: notAny,
    notInRange: notInRange,
    filter: filter,
    foldl: foldl,
    nth: nth,
    reverse: reverse,
    reduce: reduce,
    slice: slice,
    head: head,
    headN: headN,
    toString: toString
};

module.exports = array;
