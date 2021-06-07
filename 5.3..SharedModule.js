//SHARED MODULES
/* 
Modules which are exported and used in other modules will share the same variable,
instance and its value

It's a way of sharing code and values between various modules

whenever we update vslue in shared module, its gets updated in the main modules ie., where we all defined 

since the value is alwz updated, be extremely careful when doing these modules
which may leads to dangerous results in production environment
*/

var pages = require("./CustomModules/global");
var modulePageCount= pages();
modulePageCount.pagecount=10;

//console.log( "Page Count from 5.Modules.js file : "+ pages.pagecount);
console.log( "Page Count from 5.3.SharedModules.js file : "+ modulePageCount.pagecount);
console.log( "Page Count from 5.3.SharedModules.js file : "+ modulePageCount.pagesort);