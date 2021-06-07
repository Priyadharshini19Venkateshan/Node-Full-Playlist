//CUSTOM MODULES
var inv = require("./CustomModules/invoice");
var user = require("./CustomModules/users");
var order = require('./CustomModules/orders');

//exporting the function
inv.invoice(); 

//exporting the variable
userName="hiii";
console.log(userName);
console.log(user.userName);

//exporting the class
//since its an class, we have to create instance inorder to access its member
//var <variableName> = new <name given in the require statemnt>.<name given in export statement>(); 
var ord = new order.orders();
ord.setOrderId(67825346);
ord.setOrderName("Groceries");