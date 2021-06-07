/* the files from front end are loaded onto memory

streams are useful when we wanna fetch piece of file/page/data from
memory.

It helps in memory and time efficiency
It will be useful while rendering large files*/


const http = require ("http");
const fs = require ("fs");

const server = http.createServer(function(req,res){

    /*creates a stream(path) and starts to retrieve data
    instead of waiting whole file to get uploaded */
    const stream = fs.createReadStream("test.txt");
 
    //data got from stream is given as response
    stream.pipe(res);
})

server.listen(3000, ()=>{
    console.log("Apllication Started")
})