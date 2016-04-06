'use strict';
let assert = require('assert');

var tmpl = require ('../../lib/_template');

describe('_template', function(){
  it('set', function(done){
    assert.equal(tmpl.set('a{{x}}c')({x:'b'}), 'abc');
    done();
  });
});
