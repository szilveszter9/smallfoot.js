'use strict';
let assert = require('assert');

var compose = require ('../../../lib/base/_compose');

describe('base/_compose', function(){
  it('compose 0', function(done){
    var b = compose();
    assert.equal(b(), undefined);
    done();
  });
  it('compose 1', function(done){
    var b = compose(
      function ap1(a){return a+1}
    );
    assert.equal(b(5), 6);
    done();
  });
  it('compose 2', function(done){
    var b = compose(
      function ap1(a){return a+1},
      function a(){return 1}
    );
    assert.equal(b(), 2);
    done();
  });
  it('compose 2+', function(done){
    var b = compose(
      function am2(a){return a*2},
      function ap1(a){return a+1},
      function a(){return 1}
    );
    assert.equal(b(), 4);
    done();
  });
});
