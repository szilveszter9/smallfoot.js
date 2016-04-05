'use strict';
let assert = require('assert');

var obj = require ('../../lib/_object');

describe('_object', function(){
  it('getValue', function(done){
    var gb = obj.getValue('b');
    assert.equal(gb({a:1, b:9, c:3}), 9);
    done();
  });
  it('hasKey', function(done){
    var hb = obj.hasKey('b');
    var hr = obj.hasKey('r');
    assert.equal(hb({a:1, b:9, c:3}), true);
    assert.equal(hr({a:1, b:9, c:3}), false);
    done();
  });
  it('keys', function(done){
    assert.deepEqual(obj.keys({a:1, b:9, c:3}), ['a','b','c']);
    done();
  });
  it('eachKeys', function(done){
    var acc = {};
    var copy = obj.eachKeys(function(value,key,obj){
      acc[key] = value;
    });
    copy({a:1, b:9, c:3});
    assert.deepEqual(acc, {a:1, b:9, c:3});
    done();
  });
  it('setAttribute', function(done){
    var a = obj.setAttribute('a');
    var a9 = a(9);
    assert.deepEqual(a9({a:1, b:9, c:3}), {a:9, b:9, c:3});
    done();
  });
  it('setDeepAttribute', function(done){
    var def9 = obj.setDeepAttribute(['d','e','f']);
    var orig = {a:1, b:9, c:3};
    def9(orig, 9)
    assert.deepEqual(orig, {a: 1, b:9, c:3, d: {e: {f: 9}}});
    done();
  });
});
