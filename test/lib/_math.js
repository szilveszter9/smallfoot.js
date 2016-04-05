'use strict';
let assert = require('assert');

var math = require ('../../lib/_math');

describe('_math', function(){
  it('not', function(done){
    assert.equal(math.not(true), false);
    assert.equal(math.not(false), true);
    assert.equal(math.not(0), true);
    assert.equal(math.not(1), false);
    assert.equal(math.not(), true);
    assert.equal(math.not(undefined), true);
    assert.equal(math.not(NaN), true);
    assert.equal(math.not(''), true);
    assert.equal(math.not('0'), false);
    assert.equal(math.not({}), false);
    assert.equal(math.not([]), false);
    assert.equal(math.not(function(){}), false);
    assert.equal(math.not(-Infinity), false);
    assert.equal(math.not(+Infinity), false);
    assert.equal(math.not(+0), true);
    assert.equal(math.not(-0), true);
    done();
  });
  it('add', function(done){
    assert.equal(math.add(1,2), 3);
    assert.equal(math.add('1','2'), '21');
    done();
  });
  it('addLeft', function(done){
    assert.equal(math.addLeft(1,2), 3);
    assert.equal(math.addLeft('1','2'), '12');
    done();
  });
});
