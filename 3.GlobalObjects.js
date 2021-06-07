/*
Objects which are availabe through out the process or appln 
is called Global Objects 

gud egs are - CONSOLE, EXPORTS, MODULE , SET INTERVAL, CLEAR INTERVAL, SET TIMOUT,
CLEAR TIMEOUT
*/

console.log("hello from global object");

/*gives current directory
important for server code like logging, finding meta data*/

console.log(__dirname);
console.log(__filename);


//calling something from another file
//"require" keyword is important to import something from another file
var intro = require('./3.1..SampleFunc')

