'use strict';
let assert = require('assert');

var passedCLArgs;
var myWindow = {
  console: {
    log: function(){passedCLArgs = Array.prototype.slice.call(arguments); return arguments}
  }
};

var log = require ('../../lib/_log')(myWindow);

describe('_log', function(){
  it('obj', function(done){
    var obj = {a:1,b:9};
    var ret = log.obj(obj);
    assert.deepEqual(Array.prototype.slice.call(ret), {'0':obj});
    done();
  });
  it('args', function(done){
    var ret = log.args(1,2,3);
    assert.deepEqual(passedCLArgs[0], 'arguments:');
    assert.deepEqual(Array.prototype.slice.call(passedCLArgs[1]), {'0':1,'1':2,'2':3});
    assert.deepEqual(Array.prototype.slice.call(ret), {'0':1,'1':2,'2':3});
    done();
  });
  it('log', function(done){
    assert.equal(log.args, log.log);
    done();
  });
  it('value', function(done){
    var ret = log.value(111,'222');
    assert.deepEqual(passedCLArgs, [111]);
    assert.deepEqual(Array.prototype.slice.call(ret), {'0':111, '1':'222'});
    done();
  });
  it('part', function(done){
    var ret = log.part(function(a){return a*2},110);
    assert.deepEqual(passedCLArgs, [220]);
    assert.deepEqual(ret, 110);
    done();
  });
});
