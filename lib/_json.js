// _json
//
var tryCatch = require('./controlflow/_tryCatch');

var toJSON = function _toJSON(text){return tryCatch.loud(JSON.parse)(text);};
var toString = function _toString(json){return tryCatch.loud(JSON.stringify)(json);};
var clone = function _clone(json){return toJSON(toString(json))};

var json = {
    toJSON: toJSON,
    toString: toString,
    clone: clone
};

module.exports = json;
