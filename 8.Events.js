/*
 Node JS allows to set up events.

Node Js has a core module "events" which has a class EventEmitter using which we can
setup events.

The events are triggered using emitter.


*/

var fileSys = require("fs");

var events = require("events");
//impt to declare eventemitter also along with events
var eventEmitter = new events.EventEmitter();

//these are customer events.
//event definition 
eventEmitter.on('invoked', ()=>{
    console.log('custom event invoked');
})

eventEmitter.on('execute', (a,b)=>{
    eventEmitter.emit('chaining');
    console.log('execute event invoked '+ a + b );
})

eventEmitter.on('chaining', ()=>{
    console.log('chaining event invoked ' );
})

//event call
eventEmitter.emit('invoked');
eventEmitter.emit('execute', 123, 345);

/* Whenever there is a read of file, then the above emit must be emitted */
fileSys.readFile("test.txt", "utf8",
 (err,data)=> {
 console.log("The content from file: "+data);
 eventEmitter.emit('invoked');
 }
 );