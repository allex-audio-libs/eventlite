function createLib (execlib) {
    'use strict';

    var lib = execlib.lib;

    function EventLite () {
        this.listeners = [];
    }
    EventLite.prototype.destroy = function () {
        this.listeners = null;
    };
    EventLite.prototype.fire = function (thingy) {
        var i;
        if (!lib.isArray(this.listeners)) {
            return;
        }
        for (i=0; i<this.listeners.length; i++) {
            this.listeners[i](thingy);
        }
    };
    EventLite.prototype.attach = function (func) {
        if (!lib.isFunction(func)) {
            throw new lib.Error('NOT_A_FUNCTION', 'You must provide a function for attach');
        }
        this.listeners.push(func);
    };
    EventLite.prototype.detach = function (func) {
        //logic: 
        //1. find func in our this.listeners (find out the index it on)
        //2. remove the element from found index 
        var index;
        if (!lib.isArray(this.listeners)) {
            return;
        }
        index = this.listeners.indexOf(func);
        if (index>=0) {
            this.listeners.splice(index, 1);
        }
    };

    return EventLite;
}
module.exports = createLib;