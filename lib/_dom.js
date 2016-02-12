// _dom
//
var obj = require('./_object');
var tryCatch = require('./controlflow/_tryCatch');
var Either = require('./controlflow/_either');
var Right = require('./controlflow/_right');
var Left = require('./controlflow/_left');
var curry = require('./base/_curry');
var compose = require('./base/_compose');

var _getDomElement = curry(function _getDomElement(x){return document.querySelector(x);});
var getDomElement = tryCatch.silent(_getDomElement);
var eitherDomElement = compose(Either('could not find dom element'), getDomElement);
var setAttributeElValue = curry(function _setAttribute(attr, el, x){el[attr] = x;return x;});
var setAttributeValueEl = curry(function _setAttribute(attr, x, el){el[attr] = x;return el;});
var setElAttribute = curry(function(attr, firstParam, secondParam){
    if(firstParam.DOCUMENT_NODE != undefined) {
        return setAttributeElValue(attr, firstParam, secondParam);
    }
    else {
        return setAttributeValueEl(attr, firstParam, secondParam);
    }
});
var setDomElAttribute = curry(function(attr, querySelector, value){
    var el = getDomElement(querySelector);
    if(!el) return Left('could not find element: ' + querySelector);
    setElAttribute(attr, el, value);
    return Right(el);
});
//var setElHtml = compose(map(setElAttribute('innerHTML')), Either('could not find element'), getDomElement);
//var setElHtml = compose(setElAttribute('innerHTML'), Either('errrrr'), getDomElement);
//var setElHtml = compose(setElAttribute('innerHTML'), eitherDomElement);
var setElHtml = setElAttribute('innerHTML');
var setDomElHtml = setDomElAttribute('innerHTML');
//var setStyle = compose(obj.setDeepAttribute(['style']), getDomElement);
var setBgColor = compose(obj.setDeepAttribute(['style', 'backgroundColor']), getDomElement);

var dom = {
    getDomElement: getDomElement,
    eitherDomElement: eitherDomElement,
    setAttributeElValue: setAttributeElValue,
    setAttributeValueEl: setAttributeValueEl,
    setElAttribute: setElAttribute,
    setDomElAttribute: setDomElAttribute,
    setElHtml: setElHtml,
    setDomElHtml: setDomElHtml,
    setBgColor: setBgColor
};

module.exports = dom;
