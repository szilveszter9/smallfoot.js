// _tryCatch
//
var devnull = require('../base/_devnull')
var log = require('../_log');
var curry = require('../base/_curry');

var tryCatch = curry(function _tryCatch(errFunc, f){
    return function __tryCatch(){
        try{var res = f.apply(this, arguments);}catch(e){errFunc(e);}
        return res;
    };
});

var loud = tryCatch(log.obj);
var silent = tryCatch(devnull);

var tryCatch = {
    try: tryCatch,
    loud: loud,
    silent: silent
}

module.exports = tryCatch;
