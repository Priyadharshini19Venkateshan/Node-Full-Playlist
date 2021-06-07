

//EXPORTING OF FUNCTION


// Refer 5.Modules.js for importing and exporting of this file
//Ananonymous function
var invoice = function(){
console.log("hello from invoices part")
}

//invoice();

/* We can call function in another module , only if we export the function
If not it throws an error, without exporting the function and calling outside the module

SYNTAX FOR EXPORTING FUNCTION IS
module.exports.<ANYNAME> = FUNCTION NAME;
giving a same  name to <ANYNAME> and <FUNCTION NAME> is best practice to relate
*/

module.exports.invoice = invoice;


var pages = require("./global");
 var invoicesPageCount=pages.pagecount
 invoicesPageCount=20;
console.log( "Page Count from 6.CustomModules/invoice.js file : "+ invoicesPageCount);
