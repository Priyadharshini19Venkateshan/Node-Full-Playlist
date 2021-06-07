//TRADITIONAL OR WAY1 OF WRITING CLASS AND OBJECT

//this is a method which can be extended as a class
function technology(){
    this.language = "Node JS";
}

//setting a method with prototype with paramter
    technology.prototype.setTech = function(language){
    this.language = language;
}

//setting a method with prototype without paramter
technology.prototype.print = function(){
    console.log(this.language);
}

var tech = new technology() //creating an object using the class Technology
tech.setTech('React JS');  //calling the method to set value
tech.print(); // printing the name using another method
 


//WAY2 OF WRITING CLASS AND OBJECT
//using ES6

class Technology {

    language = " ";

    setLang(language){
        this.language = language;
    }

    printLang(){
        console.log(this.language);
    }
} 

const Tech = new Technology();
Tech.setLang("Angular Js");
Tech.printLang();


//pardonable code

/*when u use below code , it works fine with way 1 but if u're embedding with
ES6 with 'use strict' it'll break down with error, since the type od variable is'nt intialized

while using 'use strict', ES6 follows a strict compliation

id=10;
console.log(id); */

/* correct way to avoid above bad code 
 let id=10;
console.log(id);
*/