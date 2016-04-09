'use strict';
let assert = require('assert');

var arg = require ('../../../lib/base/_arguments');
var compose = require ('../../../lib/base/_compose');

describe('base/_arguments', function(){
  it('transparent', function(done){
    var sideEff;
    var c = arg.transparent(function(a,b){sideEff = a*b; return 'something else';});
    var comp = compose(function(a,b){return ''+a+b}, c);
    var res = comp(9,12);
    assert.deepEqual(res, '912');
    assert.equal(sideEff, 108);
    done();
  });
  it('prepend', function(done){
    var c = function(a,b){return ''+a+b;};
    var comp = compose(c, arg.prepend(9));
    assert.equal(comp(12), '912' );
    done();
  });
  it('append', function(done){
    var c = function(a,b){return ''+a+b;};
    var comp = compose(c, arg.append(9));
    assert.equal(comp(12), '129' );
    done();
  });
  it('opaque', function(done){
    var cgets;
    var c = function(){cgets = Array.prototype.slice.call(arguments); return 'anything';};
    var g = function(a,b,c){return ''+a+b+c;}
    var comp = compose(g, arg.opaque(2,c));
    var gres = comp(6,9,12,15,17);
    assert.deepEqual(cgets, [6,9] );
    assert.equal(gres, '121517' );
    done();
  });
  it('opaque on a transparent', function(done){
    var cgets;
    var c = function(){cgets = Array.prototype.slice.call(arguments); return 'anything';};
    var g = function(a,b,c){return ''+a+b+c;}
    var comp = compose(g, arg.opaque(2,arg.transparent(c)));
    var gres = comp(6,9,12,15,17);
    assert.deepEqual(cgets, [6,9] );
    assert.equal(gres, '121517' );
    done();
  });
});
