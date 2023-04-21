var func1 = console.log.bind(console, 'listener 1');
var func2 = console.log.bind(console, 'listener 2');
var func3 = console.log.bind(console, 'listener 3');

describe('Test Basic', function () {
    it('Load Lib', function () {
        return setGlobal('Lib', require('..')(execlib)); //Lib will export only the EventLite class
    });
    it('Create Event', function () {
        return setGlobal('Event', new Lib()); //yes, Lib is the EventLite class
    });
    it('Attach to Event', function () {
        Event.attach(func1);
        Event.attach(func2);
        Event.attach(func3);
    });
    it ('Fire Event', function () {
        Event.fire(5);
    });
    it('Detach Listener 2', function () {
        Event.detach(func2);
    });
    it ('Fire Event', function () {
        Event.fire('bla');
    });
});