"use strict";
//lib/index
//
/*
  TODO check for each feature, those are used here, recommend using shims if not found
  TODO make this lib safe

  var ifThen = curry(function _ifThen(compFunc,ifTrue,ifNotTrue,val){if(compFunc(val)){ return ifTrue; }else {return ifNotTrue;}});
*/
module.exports = {
    args: require('./lib/base/_arguments'),
    compose: require('./lib/base/_compose'),
    curry: require('./lib/base/_curry'),
    devnull: require('./lib/base/_devnull'),
    identity: require('./lib/base/_identity'),
    map: require('./lib/base/_map'),
    walk: require('./lib/base/_walk'),

    Either: require('./lib/controlflow/_either'),
    Left: require('./lib/controlflow/_left'),
    Maybe: require('./lib/controlflow/_maybe'),
    Right: require('./lib/controlflow/_right'),
    tryCatch: require('./lib/controlflow/_tryCatch'),

    array: require('./lib/_array'),
    channel: require('./lib/_channel'),
    compare: require('./lib/_compare'),
    dom: require('./lib/_dom'),
    domEvent: require('./lib/_domEvent'),
    event: require('./lib/_event'),
    http: require('./lib/_http'),
    json: require('./lib/_json'),
    log: require('./lib/_log'),
    math: require('./lib/_math'),
    object: require('./lib/_object'),
    string: require('./lib/_string'),
    template: require('./lib/_template')
}
