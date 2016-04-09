'use strict';
// _compose
//
var identity = require ('./_identity');

function compose2func(g,f){
    //var composedFuncs = curry(function _compose2func(){return g(f.apply(this,arguments));});
    function _compose2func(){
        var fReturn = f.apply(this,arguments);
        if(Array.isArray(fReturn) && fReturn.___handleAsArguments) {
            return g.apply(this, fReturn);
        }
        if(typeof fReturn == 'object' && fReturn !== null && fReturn.toString() == "[object Arguments]") {
            var pass = Array.prototype.slice.apply(fReturn);
            return g.apply(this, pass);
        }
        else {
            return g(fReturn);
        }
    }
    _compose2func._f = f;
    _compose2func._g = g;
    return _compose2func;
}
function compose(g,f){
    if(arguments.length==0) {
        console.info('composing nothing');
        return identity;
    }
    if(arguments.length==1) {
        console.info('composing only 1 function');
        return g;
    }
    if(arguments.length>2){
        var argarr = [].slice.call(arguments);
        var last = argarr.pop();
        //console.log('...');
        return compose(argarr, last);
    } else if(Array.isArray(g)){
        var lastG = g.pop()
        //console.log('lastG,f,g:',g);
        var composed = compose2func(lastG, f);
        if(g.length)
            return compose(g, composed);
        else
            return composed;
    } else{
        //console.log('g,f:',g,f);
        return compose2func(g,f);
    }
}

module.exports = compose;
