'use strict';
// _template
//
var array = require('./_array');
var curry = require('./base/_curry');

var set = curry(function(template, inputObj){
    var snippets = template.match(/{{\w+}}/g);
    array.each(function(snippet/*, key, object*/){
            var key = snippet.replace(/^{{/,'').replace(/}}$/,'');
            template = template.replace(snippet, inputObj[key]);
        }, snippets);
    return template;
});

var template = {
    set: set
};

module.exports = template;
