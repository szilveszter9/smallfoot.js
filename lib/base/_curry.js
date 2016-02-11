// _curry
//
var sp = require('../_sp')
/* Essence:

function curry(f){
    return function(){
        if (arguments.length>=f.length || arguments.length === 0)
            return f.apply(this,arguments);
        //else
            g = binder(f,arguments);
            return g;

            function binder(fn,args){
                g=fn;
                for(i=0; i<args.length; i++){
                    curried = f;
                    g=g.bind(self,args[i]);
                    g = curry(g,args);
                }
                return g;
            }
    };
}
*/
function curry(f){
    function _curriedFunc(){
        var self = this;
        var g;
        if (arguments.length>=f.length || arguments.length === 0){
            return f.apply(this,arguments);
        }
        //else...
            function binder(fn,args){
                var g=fn;
                for(var i=0; i<args.length; i++){
                    var curried = f;
                    g=g.bind(self,args[i]);
                    g.toString = function(){return /*'#1 CFWB: ' + */f.toString();};
                    g._orig = f;
                    g._length = g.length;
                    g._curried = curried;
                }
                g._boundArgs = [].slice.call(args);
                g = curry(g);
                return g;
            }
            g = binder(f,arguments);
            g._boundArgs = [].slice.call(arguments);//.concat('#2');
            g._sense = 'CFWB:' + sp(12) + f.name;
            g._wb = true;
            g._orig = f;
            g.toString = function toString(){return /*'#2 => ' + */f.name + '  See ._boundArgs for bindings';};
            return g;
    };
    f._length = f.length;
    _curriedFunc._curried = f;
    _curriedFunc._sense = 'CF:' + sp(14) + f.name;
    _curriedFunc._wb = false;
    _curriedFunc.toString = function toString(){
        //Curried function = Functor(a function that returns a function)
        return /*'#3 CF: ' + */(f.name || 'Give it a name') + ': ' + f.toString() + '.';
    };
    return _curriedFunc;
}

module.exports = curry;
