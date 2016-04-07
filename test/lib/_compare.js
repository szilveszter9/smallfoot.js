'use strict';
let assert = require('assert');

var cmp = require ('../../lib/_compare');

describe('_compare', function(){
  it('isEqual', function(done){
    assert.equal(cmp.isEqual(1, 1), true);
    assert.equal(cmp.isEqual('1', 1), false);
    assert.equal(cmp.isEqual('1', '1'), true);
    assert.equal(cmp.isEqual({}, {}), false);
    assert.equal(cmp.isEqual([], []), false);
    assert.equal(cmp.isEqual(function(){}, function(){}), false);
    done();
  });
  it('isNot', function(done){
    var matrix = [
      [true, false],
      [false, true],
      [0, true],
      [1, false],
      [undefined, true],
      [null, true],
      [NaN, true],
      ['', true],
      ['0', false],
      [{}, false],
      [[], false],
      [function(){}, false],
      [-Infinity, false],
      [+Infinity, false],
      [+0, true],
      [-0, true]
    ];
    matrix.forEach(function(el){
      assert.equal(cmp.isNot(el[0]), el[1], '' + el[0] + ' ' + el[1]);
    });
    done();
  });
  it('isEven', function(done){
    var matrix = [
      [true, false],
      [false, true],
      [-2, true],
      [0, true],
      [1, false],
      [4, true],
      [undefined, false],
      [null, true],
      [NaN, false],
      ['', true],
      ['-2', true],
      ['-1', false],
      ['0', true],
      ['1', false],
      [{}, false],
      [[], true],
      [function(){}, false],
      [-Infinity, false],
      [+Infinity, false],
      [+0, true],
      [-0, true]
    ];
    matrix.forEach(function(el){
      assert.equal(cmp.isEven(el[0]), el[1], '' + el[0] + ' ' + el[1]);
    });
    done();
  });
  it('isOdd', function(done){
    var matrix = [
      [true, true],
      [false, false],
      [-2, false],
      [0, false],
      [1, true],
      [4, false],
      [undefined, false],
      [null, false],
      [NaN, false],
      ['', false],
      ['-2', false],
      ['-1', false],
      ['0', false],
      ['1', true],
      [{}, false],
      [[], false],
      [function(){}, false],
      [-Infinity, false],
      [+Infinity, false],
      [+0, false],
      [-0, false]
    ];
    matrix.forEach(function(el){
      assert.equal(cmp.isOdd(el[0]), el[1], '' + el[0] + ' ' + el[1]);
    });
    done();
  });
});
