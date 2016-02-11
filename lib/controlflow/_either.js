// _either
//
var curry = require('../base/_curry');
var Right = require('./_right');
var Left = require('./_left');

var _Either = function __Either(msg, x) {
    this.val = x;
    this.msg = msg;
    return undefined;
};

_Either.prototype.map = function _map_Either(f) {
  if (this.val) {
    return Right(f(this.val));
  } else {
    console.info(this.msg);
    return Left(this.msg);
  }
};

var Either = curry(function _newEither(msg, x) {
    return new _Either(msg, x);
});

module.exports = Either;
