//EXPORTING OF Variable


/* This way code can be easily changeable by anyone in any file.
which leads to clash of values in variable*/
userName = "Priyadharshini";


/*when we export the variable , it does not clash with another
variable of same change.
It will not be changeable
*/
module.exports.userName="Priyadharshini";

var pages = require("./global");
var usersPagecount=pages.pagecount;
usersPagecount=15;
console.log( "Page Count from 6.CustomModules/users.js file : "+ usersPagecount);
