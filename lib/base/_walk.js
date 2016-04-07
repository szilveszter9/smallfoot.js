'use strict';
// _walk
//
var sp = require('../_sp')
function gr(obj, cb){
    var gr = Object.create(null);
    gr['...']=obj;
    var typ = (typeof obj == 'function') ? 'group' : 'info';
    if(obj._wb === false) typ = 'log';
        var isCompose = obj.name==='_compose2func';
    if(isCompose) console.group('(' + sp(8));
    else
        console[typ](
            obj && obj._sense || typeof obj + ':' + sp(8)
            , obj && obj._orig || ''
            , typ==='group'?gr:(typeof obj=='string'?'"'+obj+'"':obj)
        );
    cb && cb();
    if(typ==='group') console.groupEnd();
        if(isCompose) console.log(')');
}
function walk(f,sub){
    if(!sub) console.group('-=== walk ===-' + sp(56) + '(C:curried, F:function, W:with, B:binding)');
        if(!sub) gr(f,_inner);
    else _inner();
    if(!sub) console.groupEnd('-============-');

        function _inner(){
            if(f._boundArgs)
                f._boundArgs.forEach(function each(b){
                    gr(b, function(){walk(b,true)});
                });
            if(f._g) gr(f._g,function(){walk(f._g,true)});
                if(f._f) gr(f._f,function(){walk(f._f,true)});
                    if(f._orig) gr(f._orig,function(){walk(f._orig,true)});
        }
};

module.exports = walk;
