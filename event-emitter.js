const EventEmitter = require('events').EventEmitter;
const util = require('util');

const Person = function(name) {
  this.name = name;
};

util.inherits(Person, EventEmitter);

const ben = new Person('Ben Franklin');
const scott = new Person('Scott');

ben.on('speak', function(said) {
  console.log(`${this.name}: ${said}`);
});

ben.on('speak', function(said) {
  console.log(`${this.name}: ${said}hahaha`);
});

scott.on('speak', function(said) {
  console.log(`${this.name}: ${said}hahaha1312312312`);
});

ben.emit('speak', 'HEHEHE');
scott.emit('speak', 'aa');
