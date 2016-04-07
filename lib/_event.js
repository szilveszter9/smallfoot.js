'use strict';
// _event
//
var obj = require('./_object');
var compare = require('./_compare');
var array = require('./_array');
var curry = require('./base/_curry');
var compose = require('./base/_compose');

function preventDefault(el, eType, e){ return e.preventDefault()};

var addListener = curry(function _eventListener(fn, eventType, el){
    el.addEventListener(
        eventType,
        function _addedEventListenerFn(){fn(el,eventType, arguments[0]);}
    );
    return el;
});

//left = 1         3 5 7
//right = 2        3 6 7
//middle = 4       5 6 7
//altKey
//ctrlKey
//shiftKey

var getEventButtons = obj.getValue('buttons');
var isLeftMouseButtonDown = compose(compare.isOdd, getEventButtons);
var isRightMouseButtonDown = compose(array.inRange([2,3,6,7]), getEventButtons);
var isMiddleMouseButtonDown = compose(array.inRange([4,5,6,7]), getEventButtons);

var event = {
    preventDefault: preventDefault,
    addListener: addListener,
    getEventButtons: getEventButtons,
    isLeftMouseButtonDown: isLeftMouseButtonDown,
    isRightMouseButtonDown: isRightMouseButtonDown,
    isMiddleMouseButtonDown: isMiddleMouseButtonDown
};

module.exports = event;
