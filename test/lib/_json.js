'use strict';
let assert = require('assert');

var json = require ('../../lib/_json');

describe('_json', function(){
  it('toJSON', function(done){
    assert.deepEqual(json.toJSON('{"abc":"1"}'), {abc:1});
    done();
  });
  it('toString', function(done){
    assert.equal(json.toString({abc:1}), '{"abc":1}');
    done();
  });
  it('clone', function(done){
    let a = {abc:1}
    let b = json.clone(a);
    assert.deepEqual(b, {abc:1});
    assert.notEqual(b, a);
    done();
  });
});
