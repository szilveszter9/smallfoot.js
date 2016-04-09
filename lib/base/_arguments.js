'use strict';
// _arguments
//
var curry = require('./_curry');

var transparent = curry(function _transparent(f){
    return function __transparent(){
        f.apply(this, arguments);
        return arguments;
    }
});
var prepend = curry(function(x){
    var args = Array.isArray(x)
      ? x
      : [x];
    args.___handleAsArguments = true;
    return function(){
        for(var i=0; i<arguments.length; i++) {
            args.push(arguments[i]);
        }
        return args;
    }
});
var append = curry(function(x){
    var args = Array.isArray(x)
      ? x
      : [x];
    args.___handleAsArguments = true;
    return function(){
        for(var i=0, len=arguments.length; i<len; i++) {
            args.unshift(arguments[len - 1 - i]);
        }
        return args;
    }
});
var opaque = curry(function _opaque(nr,f){
    var argsUse = [];
    argsUse.___handleAsArguments = true;
    var argsForward = [];
    argsForward.___handleAsArguments = true;
    return function __opaque(){
        for(var i=0; i<nr; i++) {
            argsUse.push(arguments[i]);
        }
        for(var i=nr, len=arguments.length; i<len; i++) {
            argsForward.push(arguments[i]);
        }
        var fReturn = f.apply(this, argsUse);

        if(Array.isArray(fReturn) && fReturn.___handleAsArguments
           || typeof fReturn == 'object'
           && fReturn !== null
           && fReturn.toString() == "[object Arguments]") {
            for(var i=0, len=fReturn.length; i<len; i++) {
                argsForward.push(fReturn[i]);
            }
        }
        else {
            argsForward.push(fReturn);
        }

        return argsForward;
    }
});

var args = {
    transparent: transparent,
    prepend: prepend,
    append: append,
    opaque: opaque
};

module.exports = args;
