'use strict';
let assert = require('assert');

var identity = require ('../../../lib/base/_identity');

describe('base/_identity', function(){
  it('identity', function(done){
    var fltr = identity;
    assert.deepEqual([0, 1, 2, 3].filter(fltr), [1, 2, 3]);
    done();
  });
});
