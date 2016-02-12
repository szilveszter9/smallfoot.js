// _object
//
var curry = require('./base/_curry');
var json = require('./_json');

var getValue = curry(function _getValue(key,obj){return obj[key];});
var getThis = curry(function _getThis(){return this;});
var hasKey = curry(function _objHasKey(key, obj){return obj.hasOwnProperty(key);});
var keyIsValue = curry(function _objKeyIsValue(val,key,obj){if(obj[key] && obj[key]===val) return obj;});
var keyIsNotValue = curry(function _objKeyIsNotValue(val,key,obj){if(!obj[key] || obj[key]!==val) return obj;});
var eachKeys = curry(function _eachKeys(f, obj){
    for(var key in obj) {
        if(obj.hasOwnProperty(key)) {
            f.call(this, obj[key], key, obj);
        }
    };
    return obj;
});
var setAttribute = curry(function _setAttribute(attr, el, x){
    var y = json.clone(x);
    y[attr] = el;
    return y;
});
/*
TODO split by dot and square brackets
  plus set array instead of {} where needed
  eg: 'obj.arr[0].obj'
*/
var setDeepAttribute = curry(function _setDeepAttribute(attrArr, el, x){
    var sub = el;
    for(var i = 0; i < attrArr.length - 1; i++){
        var attr = attrArr[i];
        if(!sub[attr]) {
            sub[attr] = {};
        }
        sub = sub[attr];
    }
    sub[attrArr[attrArr.length - 1]] = x;
    return el;
});

var obj = {
    getValue,
    getThis,
    hasKey,
    keyIsValue,
    keyIsNotValue,
    eachKeys,
    setAttribute,
    setDeepAttribute
};

module.exports = obj;
