'use strict';
let assert = require('assert');

var dom = require ('../../lib/_dom');
var Either = require('../../lib/controlflow/_either');
var Right = require('../../lib/controlflow/_right');
var Left = require('../../lib/controlflow/_left');

var Dom = {};
global.document = {
  querySelector: function(x){
    if(x.match('@invalidSelector'))
      throw('@ is not a valid selector');
    return Dom[x]
  }
};

describe('_dom', function(){
  beforeEach(function(){
    Dom['#a9'] = {a:9, DOCUMENT_NODE:1};
    Dom['#simple_object'] = {simple_object:3};
  });
  it('getDomElement', function(done){
    assert.deepEqual(dom.getDomElement('#a9'), {a:9, DOCUMENT_NODE:1});
    assert.deepEqual(dom.getDomElement('@invalidSelector'), undefined);
    done();
  });
  it('eitherDomElement', function(done){
    assert.deepEqual(dom.eitherDomElement('#a9'), Either('could not find dom element')({a:9, DOCUMENT_NODE:1}));
    assert.deepEqual(dom.eitherDomElement('@invalidSelector'), Either('could not find dom element')(undefined));
    done();
  });
  it('setAttributeElValue', function(done){
    assert.deepEqual(dom.setAttributeElValue('b')(Dom['#a9'])(2), 2);
    assert.deepEqual(dom.setAttributeElValue('b')(Dom['#simple_object'])(2), 2);
    done();
  });
  it('setAttributeValueEl', function(done){
    assert.deepEqual(dom.setAttributeValueEl('b')(2)(Dom['#a9']), Dom['#a9']);
    assert.deepEqual(dom.setAttributeValueEl('b')(2)(Dom['#simple_object']), {simple_object:3, b:2});
    done();
  });
  it('setElAttribute', function(done){
    let docNode = dom.getDomElement('#a9');
    let onlyObj = dom.getDomElement('#simple_object');
    assert.deepEqual(dom.setElAttribute('b')(onlyObj)(docNode), {a:9, DOCUMENT_NODE:1, b:{simple_object:3}});
    assert.deepEqual(dom.setElAttribute('b')(docNode)(onlyObj), {simple_object:3});
    done();
  });
  it('setDomElAttribute', function(done){
    assert.deepEqual(dom.setDomElAttribute('b')('#a9')(2), Right({a:9, DOCUMENT_NODE:1, b:2}));
    assert.deepEqual(dom.setDomElAttribute('b')('@invalidSelector')(2), Left('could not find element: @invalidSelector'));
    done();
  });
  it('setElHtml', function(done){
    let docNode = dom.getDomElement('#a9');
    let onlyObj = dom.getDomElement('#simple_object');
    assert.deepEqual(dom.setElHtml(onlyObj)(docNode), {a:9, DOCUMENT_NODE:1, innerHTML:{simple_object:3}});
    assert.deepEqual(dom.setElHtml(docNode)(onlyObj), {simple_object:3});
    done();
  });
  it('setDomElHtml', function(done){
    assert.deepEqual(dom.setDomElHtml('#a9')(2), Right({a:9, DOCUMENT_NODE:1, innerHTML:2}));
    assert.deepEqual(dom.setDomElHtml('@invalidSelector')(2), Left('could not find element: @invalidSelector'));
    done();
  });
  it('setBgColor', function(done){
    assert.deepEqual(dom.setBgColor('#a9')('red'), {a:9, DOCUMENT_NODE:1, style:{backgroundColor:'red'}});
    assert.throws(()=>dom.setBgColor('@invalidSelector')(2));
    done();
  });
});
