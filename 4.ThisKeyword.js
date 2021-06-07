/* 
"THIS" keyword is an reference to the object in context 
we'll be using this while defining the classes
we use this keyword to reference variable and methods inside the class
*/


//Using "THIS" keyword inside the (JSON) Object 
var names = {
    getNames : function(name){
        console.log(this);  // it takes the entire object as an reference
    }
}

names.getNames("Priya");


//Using "THIS" keyword inside the class

class Name{

    personName=" ";

   setAllNames = () =>{
// here this operator refers to variable inside the class
      this.personName="Shiva"; 
    }

    displayNames = () =>{
 // here this operator refers to function inside the class       
        this.setAllNames();
        console.log(this.personName);
    }
}

var n = new Name();
n.displayNames();
