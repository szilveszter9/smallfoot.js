'use strict';
// _maybe
//
var _Maybe = function __Maybe(x) {
  this.val = x;
  return undefined;
};

_Maybe.prototype.map = function _map_Maybe(f) {
  if (this.val) {
    return Maybe(f(this.val));
  } else {
    return Maybe(null);
  }
};

var Maybe = function _newMaybe(x) {
  return new _Maybe(x);
};

module.exports = Maybe;
