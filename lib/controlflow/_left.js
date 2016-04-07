'use strict';
// _left
//
var _Left = function __Left(x) {
  this.val = x;
  return undefined;
};

_Left.prototype.map = function _map_Left(f) {
  if (this.val) {
    console.info(this.val);
    return Left(logObj(this.val));
  } else {
    return Left('crazy error');
  }
};

var Left = function _newLeft(x) {
  return new _Left(x);
};

module.exports = Left;
