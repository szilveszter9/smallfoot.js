// _http
//
var curry = require('./base/_curry');
var compose = require('./base/_compose');
var json = require('./_json');
var log = require('./_log');
var obj = require('./_object');

var request = curry(function _httpRequest(method, firstParam, secondParam, thirdParam){
    params = [];
    params[typeof firstParam] = firstParam;
    params[typeof secondParam] = secondParam;
    params[typeof thirdParam] = thirdParam;
    return _request(method, params.function, params.string, params.object || {});
});

var _request = curry(function _httpRequest(method, listenerFunc, url, data){
    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', listenerFunc);
    oReq.open(method, url, true);
    oReq.send();
});

var get = request('get');
get.___handleAsIO = true;
var post = request('post');
post.___handleAsIO = true;
var getResponseText = compose(obj.getValue('responseText'), obj.getThis);
var logResponseText = compose(log.obj, getResponseText);
var getResponseJSON = compose(json.toJSON, getResponseText);
var logResponseJSON = compose(log.obj, getResponseJSON);

var http = {
    request,
    get: get,
    post,
    getResponseText,
    getResponseJSON
};

module.exports = http;
