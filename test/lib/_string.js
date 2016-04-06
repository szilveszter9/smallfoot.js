'use strict';
let assert = require('assert');

var str = require ('../../lib/_string');
var json = require ('../../lib/_json');

describe('_string', function(){
  it('cat', function(done){
    assert.equal(str.cat('1')(2), '12');
    assert.equal(str.cat(1)(2), '12');
    done();
  });
  it('tac', function(done){
    assert.equal(str.tac('1',2), '21');
    assert.equal(str.tac('1')(2), '21');
    assert.equal(str.tac(1)(2), '21');
    assert.equal(str.tac(1,2), '21');
    done();
  });
  it('split', function(done){
    assert.deepEqual(str.split(',')('1,2,3'), [1,2,3]);
    assert.deepEqual(str.split(',','1,2,3'), [1,2,3]);
    done();
  });
  it('trim', function(done){
    assert.equal(str.trim(' 1 '), '1');
    done();
  });
  it('upper', function(done){
    assert.deepEqual(str.upper('abc'), 'ABC');
    done();
  });
  it('toArray', function(done){
    assert.deepEqual(str.toArray('abc'), ['a','b','c']);
    done();
  });
  it('toJSON', function(done){
    assert.deepEqual(json.toJSON, str.toJSON);
    assert.deepEqual(str.toJSON('{"abc":"1"}'), {abc:1});
    done();
  });
});
