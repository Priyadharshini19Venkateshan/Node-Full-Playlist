/*
Module in Node js is a simple or complex pieces of functionality organized
in single or multiple js files which can be reused through out the node js

Modules helps in modular design of application

Easy to maintain, extend, debug

Node js provides a lot of built in , ready to use modules
eg- http modules, fs(file system) modules
*/

/*
syntax of including built in module

var variableName = require ("ModuleName");

 you dont have to include './' symbol inside require func,
its only need for including files 
*/




//BUILT-IN MODULES (or) CORE MODULES
var http = require ("http"); // for http calls
var fileSys = require ("fs");//file system operations
var event = require ("events"); //event handling, event binding etc
var url = require("url");
var assert = require("assert");

fileSys.readFile("test.txt", "utf8",
 (err,data)=> console.log("The content from file: "+data) );

 const writeData = "Hello from NODE JS"; 
fileSys.writeFile("test.txt",writeData,
()=> console.log("Date has been written into file"))

const appendData = "  !@#$%^&*()_+><?"; 
fileSys.appendFile("test.txt",appendData,
()=> console.log("Date has been appened into file"))

const urlLink = "http://localhost:50/get?year=2021&month=may&day=12&active=1";
var urlObj = url.parse(urlLink);
console.log(urlObj.port);
console.log(urlObj.query);
console.log(urlObj.pathname);
console.log(urlObj.search);




















