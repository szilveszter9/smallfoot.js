'use strict';
let assert = require('assert');

var map = require ('../../../lib/base/_map');

describe('base/_map', function(){
  it('map', function(done){
    var p1 = map(
      function a(value,key,arr){ return value + 1; }
    );
    assert.deepEqual(p1([1,2,3]), [2,3,4]);
    done();
  });
});
