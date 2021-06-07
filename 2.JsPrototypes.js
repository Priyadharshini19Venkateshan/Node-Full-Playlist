 // json object
 var courses = {
     name: "Node js",
     desc: "Its an runtime environment"
 }
 console.log(courses);
 console.log(courses.name);
 console.log(courses.desc);

 //functions

 //function declaration
 function getCourses(){
     console.log("Displaying all courses"+ courses.name);
 }

 function getCoursesId(id){
    console.log("Displaying course id "+ id);
}

//Ananymous function

//ananymous function declaration
var getusers = function(){
    console.log("This lists all the users name");
}
//usage of ananymous function
//It passes function as a parameter
function displayUsers(functionName){
    functionName();
}

//arrow function

var userId = (id)=>{
    console.log("displaying arrow func with paramter id" + id);
}

var user= ()=>{
    console.log("displaying arrow func without paramter");
}


 getCourses(); // function invokation
 getCoursesId(11);
 displayUsers(getusers); //ananymous func call
 userId(44); //arrow func call
 user();  //arrow func call