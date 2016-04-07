'use strict';
var assert = require('assert');

var evt = require('../../lib/_event');

describe('_event', function(){
  it('preventDefault', function(done){
    var mockEvent = {preventDefault: done};
    evt.preventDefault(null, null, mockEvent);
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

    var someEvent = new Event('someEvent');
    evt.addListener(cb, 'someEvent', mockEl);
    mockEl.dispatchEvent(someEvent);

    function cb(){
      assert.equal(arguments[0], mockEl);
      assert.equal(arguments[1], 'someEvent');
      assert.equal(arguments[2], someEvent);
      done();
    }
  });
  it('getEventButtons', function(done){
    var Event = {buttons: 7};
    assert.equal(evt.getEventButtons(Event), 7);
    done();
  });
  it('isLeftMouseButtonDown', function(done){
    var matrix = [
      [{buttons: 1}, true ],
      [{buttons: 2}, false],
      [{buttons: 3}, true ],
      [{buttons: 4}, false],
      [{buttons: 5}, true ],
      [{buttons: 6}, false],
      [{buttons: 7}, true ]
    ];
    matrix.forEach(function(el){
      assert.equal(evt.isLeftMouseButtonDown(el[0]), el[1], '' + el[0] + ' ' + el[1]);
    });
    done();
  });
  it('isRightMouseButtonDown', function(done){
    var matrix = [
      [{buttons: 1}, false],
      [{buttons: 2}, true ],
      [{buttons: 3}, true ],
      [{buttons: 4}, false],
      [{buttons: 5}, false],
      [{buttons: 6}, true ],
      [{buttons: 7}, true ]
    ];
    matrix.forEach(function(el){
      assert.equal(evt.isRightMouseButtonDown(el[0]), el[1], '' + el[0] + ' ' + el[1]);
    });
    done();
  });
  it('isMiddleMouseButtonDown', function(done){
    var matrix = [
      [{buttons: 1}, false],
      [{buttons: 2}, false],
      [{buttons: 3}, false],
      [{buttons: 4}, true ],
      [{buttons: 5}, true ],
      [{buttons: 6}, true ],
      [{buttons: 7}, true ]
    ];
    matrix.forEach(function(el){
      assert.equal(evt.isMiddleMouseButtonDown(el[0]), el[1], '' + el[0] + ' ' + el[1]);
    });
    done();
  });
});
