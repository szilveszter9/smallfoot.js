'use strict';
let assert = require('assert');

var math = require ('../../lib/_math');

describe('_math', function(){
  it('not', function(done){
    var matrix = [
      [true, false],
      [false, true],
      [-2, false],
      [0, true],
      [1, false],
      [4, false],
      [undefined, true],
      [null, true],
      [NaN, true],
      ['', true],
      ['-2', false],
      ['-1', false],
      ['0', false],
      ['1', false],
      [{}, false],
      [[], false],
      [function(){}, false],
      [-Infinity, false],
      [+Infinity, false],
      [+0, true],
      [-0, true]
    ];
    matrix.forEach(function(el){
      assert.equal(math.not(el[0]), el[1], '' + el[0] + ' ' + el[1]);
    });
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
