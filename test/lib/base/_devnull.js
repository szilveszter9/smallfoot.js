'use strict';
let assert = require('assert');

var devnull = require ('../../../lib/base/_devnull');

describe('base/_devnull', function(){
  it('devnull', function(done){
    assert.deepEqual(devnull(1,2,3), undefined);
    done();
  });
});
