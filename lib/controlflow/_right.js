// _right
//
var _Right = function __Right(x) {
  this.val = x;
  return undefined;
};

_Right.prototype.map = function _map_Right(f) {
  if (this.val) {
    return Right(f(this.val));
  } else {
    return Left('crazy error');
  }
};

var Right = function _newRight(x) {
  return new _Right(x);
};

module.exports = Right;
