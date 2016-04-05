'use strict';
let assert = require('assert');

var arr = require ('../../lib/_array');

describe('_array', function(){
  it('each', function(done){
    var acc = [];
    var p1 = arr.each(
      function a(value,key,arr){ acc[key] = value + 1; }
    );
    p1([1,2,3]);
    assert.deepEqual(acc, [2,3,4]);
    done();
  });
  it('some', function(done){
    var acc = [];
    var sgt3 = arr.some(
      function a(value,key,arr){ return value > 3; }
    );
    assert.equal(sgt3([1,2,3]), false);
    assert.equal(sgt3([2,3,4]), true);
    done();
  });
  it('any', function(done){
    assert.equal(arr.any, arr.some);
    done();
  });
  it('contains', function(done){
    var c4 = arr.contains(4);
    assert.equal(c4([1,2,3]), false);
    assert.equal(c4([2,3,4]), true);
    done();
  });
  it('inRange', function(done){
    var ir123 = arr.inRange([1,2,3]);
    assert.equal(ir123(2), true);
    assert.equal(ir123(4), false);
    done();
  });
  it('notAny', function(done){
    var ngt3 = arr.notAny(
      function a(value,key,arr){ return value > 3; }
    );
    assert.equal(ngt3([1,2,3]), true);
    assert.equal(ngt3([2,3,4]), false);
    done();
  });
  it('notInRange', function(done){
    var nir123 = arr.notInRange([1,2,3]);
    assert.equal(nir123(2), false);
    assert.equal(nir123(4), true);
    done();
  });
  it('filter', function(done){
    var fodd = arr.filter(function(value){
      return value > 1;
    });
    assert.deepEqual(fodd([1,2,3]), [2,3]);
    done();
  });
  it('foldl', function(done){
    var foldAdd = arr.foldl(function(value, acc){
      return acc += value;
    });
    var foldSum = foldAdd(0);
    assert.equal(foldSum([1,2,3]), 6);
    done();
  });
  it('reduce', function(done){
    assert.equal(arr.reduce, arr.foldl);
    done();
  });
  it('reverse', function(done){
    assert.deepEqual(arr.reverse([1,2,3]), [3,2,1]);
    done();
  });
  it('slice', function(done){
    var sl1 = arr.slice(1,2);
    assert.deepEqual(sl1([1,9,3]), [9]);
    done();
  });
  it('head', function(done){
    assert.deepEqual(arr.head([9,2,3]), 9);
    done();
  });
  it('headN', function(done){
    var h2 = arr.headN(2);
    assert.deepEqual(h2([9,2,3]), [9,2]);
    done();
  });
  it('toString', function(done){
    assert.deepEqual(arr.toString(['a','b','c']), 'abc');
    done();
  });
});
