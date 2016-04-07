'use strict';
// _domEvents
//
var obj = require('./_object');
var evnt = require('./_event');
var curry = require('./base/_curry');

var setBgByEvent = curry(function _setBgByEvent(el, eventType, event){
    var color = 'rgb(' + (event.pageX + 30) + ',' + (event.pageY + 30) + ',' + '50)';

    obj.setDeepAttribute(
        ['style', 'backgroundColor'],
        el,
        color
    );

    return color;
});

var moveByEvent = function _moveByEvent(el, eventType, event){
    var pos = {};
    var zoom = el.style.zoom || 1;
    if(el.style.left === '' || el.style.left === ''){
        var b = el.getBoundingClientRect();
        var bLeft = b.left;
        var bTop = b.top;
    }
    var leftPrev = parseFloat((el.style.left || ''+bLeft || '0').replace('px',''));
    var topPrev = parseFloat((el.style.top || ''+bTop || '0').replace('px',''));

    if(evnt.isLeftMouseButtonDown(event)){
        var pos = {
            position: 'absolute',
            left: leftPrev + event.movementX / zoom + 'px',
            top: topPrev + event.movementY / zoom + 'px'
        };
        return _moveEl(el, pos);
    };

    return pos;
};

var _moveEl = function __moveEl(el, pos){
    obj.setDeepAttribute(['style', 'position'], el, pos.position);
    obj.setDeepAttribute(['style', 'left'], el, pos.left);
    obj.setDeepAttribute(['style', 'top'], el, pos.top);
    return pos;
}

var rotateByEvent = curry(function _rotateByEvent(el, eventType, event){
    var rotate = 'rotate(0rad)';

    if(evnt.isRightMouseButtonDown(event)){
        var zoom = el.style.zoom || 1;
        var t = event.currentTarget;
        var radianPrev = parseFloat(el.style.transform.replace('rotate(', '').replace('rad)', '')) || 0;
        var deltaX = event.pageX / zoom - (t.clientLeft + t.offsetLeft + t.clientWidth/2);
        var deltaY = event.pageY / zoom - (t.clientTop + t.offsetTop + t.clientHeight/2);
        var minX = deltaY > 0 ? -1 : 1;
        var minY = deltaX < 0 ? -1 : 1;
        var delta = minX * event.movementX / zoom + minY * event.movementY / zoom;
        var length = Math.sqrt(deltaY*deltaY + deltaX*deltaX);
        var radian = Math.atan(delta/length*0.80);
        var rotate = 'rotate(' + (radianPrev + radian) + 'rad)';
        obj.setDeepAttribute(
            ['style', 'transform'],
            el,
            rotate
        );
    }

    return rotate;
});

var zoomByEvent = curry(function _zoomByEvent(el, eventType, event){
    var zoomPrev = el.style.zoom || 1;

    if(evnt.isMiddleMouseButtonDown(event)){
        var t = event.currentTarget;
        var zoom = zoomPrev * (1 + event.movementX/80) * (1 + event.movementY/80);
        var leftPrev = parseFloat(el.style.left.replace('px',''));
        var topPrev = parseFloat(el.style.top.replace('px',''));
        //console.log('leftPrev:', leftPrev);
        //console.log('t.clientWidth:', t.clientWidth);
        var pos = {
            position: 'absolute',
            left: leftPrev / zoom * zoomPrev + 'px',
            top: topPrev / zoom * zoomPrev + 'px'
        };
        //console.log('pos.left:',pos.left);
        _moveEl(el, pos);
        _zoomEl(el, zoom);
    }

    return zoom || zoomPrev;
});

var _zoomEl = function(el, zoom) {
    obj.setDeepAttribute(
        ['style', 'zoom'],
        el,
        zoom
    );
}

var domEvents = {
    setBgByEvent: setBgByEvent,
    moveByEvent: moveByEvent,
    rotateByEvent: rotateByEvent,
    zoomByEvent: zoomByEvent
};

module.exports = domEvents;
