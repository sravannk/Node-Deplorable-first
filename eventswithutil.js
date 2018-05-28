var events = require('events');
var util = require('util');

var persons = function (name) {
    this.name = name;

}

util.inherits(persons, events.EventEmitter);

var james = new persons('james');
var joy = new persons('joy');
var lol = new persons('lol');

var personInfo = [james, joy, lol];

personInfo.forEach(function (person) {
    person.on('speak', function (mssg) {
        console.log("person is" + person.name + '  :: ' + mssg
        );
    })
})


james.emit('speak', "hello");
joy.emit('speak', "how r you");
lol.emit('speak', "its ok good");


