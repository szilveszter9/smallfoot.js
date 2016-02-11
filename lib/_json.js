// _json
//
var curry = require('./base/_curry');
var tryCatch = require('./controlflow/_tryCatch');

var toJSON = curry(function _toJSON(text){return tryCatch.loud(JSON.parse)(text);});

var json = {
    toJSON
};

module.exports = json;
