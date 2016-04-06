'use strict';
var assert = require('assert');

var http = require('../../lib/_http');
var json = require('../../lib/_json');
var compose = require('../../lib/base/_compose');

global.XMLHttpRequest = function xmlhttpreq(){
  var listenerFunc;
  var openArgs;
  xmlhttpreq.prototype.addEventListener = function(load, callback){
    listenerFunc = callback;
  };
  xmlhttpreq.prototype.open = function(method, url, async, user, pwd){
    this.openArgs = json.clone(arguments);
  };
  xmlhttpreq.prototype.send = function(){
    setTimeout(function(){
      listenerFunc();
    },10);
  };
  return this;
}

describe('_http', function(){
  it('request', function(done){
    var req = http.request(
      'get',
      check,
      'nowhere:80',
      {data:'data'}
      //'user',
      //'secret'
    );
    function check(){
      assert.deepEqual(req.openArgs,  {'0':'get', '1':'nowhere:80', '2':true/*, '3':'user', '4':'secret'*/});
      done();
    }
  });
  it('get', function(done){
    var req = http.get(
      check,
      'nowhere:80',
      {data:'data'}
      //'user',
      //'secret'
    );
    function check(){
      assert.deepEqual(req.openArgs,  {'0':'get', '1':'nowhere:80', '2':true/*, '3':'user', '4':'secret'*/});
      done();
    }
  });
  it('getResponseText', function(done){
    assert.equal(http.getResponseText.bind({responseText: 9}).call().valueOf(), 9);
    done();
  });
  it('getResponseJSON', function(done){
    assert.deepEqual(http.getResponseJSON.bind({responseText: '{"a":9}'}).call().valueOf(), {a:9});
    done();
  });
});
