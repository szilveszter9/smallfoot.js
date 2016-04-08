'use strict';
let assert = require('assert');

var ch = require ('../../lib/_channel');

describe('_channel', function(){
  it('create', function(done){
    var filter = function(){};
    var c = ch.create(1,filter);
    assert.deepEqual(c, {
      buffer: [],
      filter: filter,
      consumers: []
    });
    done();
  });
  it('put', function(done){
    var filter = function(el){return el.b;};
    var c = ch.create(1,filter);

    ch.put(c, {a:1});
    ch.put(c, {b:9});
    ch.put(c, {c:3});

    assert.deepEqual(c, {
      buffer: [{b:9}],
      filter: filter,
      consumers: []
    });
    done();
  });
  it('put', function(done){
    var filter = function(){return true;};
    var c = ch.create(1,filter);

    ch.put(c, {a:1});
    ch.put(c, {b:9});
    ch.put(c, {c:3});
    ch.take(c, function(){
      assert.deepEqual(c, {
        buffer: [{b:9},{c:3}],
        filter: filter,
        consumers: []
      });
      done();
    })
  });
  it('addListener', function(done){
    var args;
    var Event = function(a){this.type = a;};
    var mockEl = {
      addEventListener: function(eventType, cb){
        args = {eventType:eventType, cb:cb};
      },
      dispatchEvent: function(event){
        if(args.eventType === event.type)
          args.cb(event);
      }
    };

    var filter = function(el){return el.type === 'someEvent'};
    var c = ch.create(1,filter);

    ch.addListener(mockEl, 'someEvent', c);

    var someEvent = new Event('someEvent');

    mockEl.dispatchEvent(someEvent);

    assert.deepEqual(c, {
      buffer: [{type:'someEvent'}],
      filter: filter,
      consumers: []
    });
    done();
  });
});
