var curry = require('./base/_curry');

var create = function _createChannel(sizeOrBuffer, filter) {
    return {
        buffer: [],
        filter: filter,
        consumers: []
    };
}

function put(c, v) {
    if(c.filter(v)) {
        c.buffer.push(v);
    }
    return run(c);
};

function take(c, cb) {
    c.consumers.push(cb);
    return run(c);
};

function run(c) {
    if (c.buffer.length && c.consumers.length) {
        c.consumers.shift()(c.buffer.shift());
    }
    return c;
};

var addListener = curry(function _channelListener(elem, type, channel){
    elem.addEventListener(type, function _addedChannelListerenFn(event){put(channel, event)});
});

var channel = {
    create,
    put,
    take,
    run,
    addListener
};

module.exports = channel;
