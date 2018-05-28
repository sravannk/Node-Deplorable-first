var events = require('events');

var mEvents = new events.EventEmitter();

mEvents.on('first', function (mssg) {
    console.log(mssg);
})

mEvents.emit('first', "hello event");

