/* 
SYNCHRONOUS (sync)
-> step by step execution/sequential execeution (top to down)
-> when a process encounters a request, it waits for the req to get complete and then move to next part of execution



ASYNCHRONOUS (async)
-> it does'nt wait for the entire request to be processed
-> instead if the req1 is on execution, on mean while time it starts to execute req2
when it receives response from req1, it will process the req1.
-> Node js is by default async processing.

CALL BACK FUNCTION 
A callback function is a function passed into another function as an argument,
 which is then invoked inside the outer function to complete some kind of routine or action
*/


//sync method can be implemented try,catch,finally

 var getUserInfo = function(){
 setTimeout(()=>{
     console.log("user info will be returned from getUserInfo function ");
    },10000);
}

function getUserContact(){
    console.log("user contacts will be returned");  
}

/* getUserInfo();
getUserContact();
By normal execution, this will perform in an async way
but info should be fetched before contacts are obtained
  the above func has to perform in a sync way
 */

  try{
    console.log("Getting user info from try block");
  }
  catch(e){
    console.log("Error in getting user info"+ e);
  }
finally{
    console.log("user info will be returned from finally block");
}
getUserContact();

//sync method can be implemented promise method

/*promise method takes 2 parameter
resolver - execution wants to be done based in logic
reject - reject the part of execution done based in logic
        while using reject method then block will not be executed */
 
var user = new Promise(
    (resolver,reject)=> { 
         // write the logic here
        console.log("Getting user info from promise method");
    
        //either resolve or reject based on above logic
        resolver("Return user info from promise method");
    }).then((data)=>{
        getUserContact();
    }).catch((e)=>{
        console.log(e);
    })

    