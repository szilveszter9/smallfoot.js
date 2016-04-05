'use strict';
let assert = require('assert');

var compose = require ('../../../lib/base/_compose');

describe('base/_compose', function(){
  it('compose', function(done){
    var b = compose(
      function ap1(a){return a+1},
      function a(){return 1}
    );
    assert.equal(b(), 2);
    done();
  });
});
