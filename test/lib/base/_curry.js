'use strict';
let assert = require('assert');

var curry = require ('../../../lib/base/_curry');

describe('base/_curry', function(){
  it('curry', function(done){
    var a = curry(
      function a(b,c,d){return b+c+d}
    );
    assert.equal(typeof a, 'function');
    assert.equal(a(1,2,3), 6);
    assert.equal(typeof a(1,2), 'function');
    assert.equal(typeof a(1), 'function');
    assert.equal(a().toString(), 'NaN');
    done();
  });
});
