

var http = require('http');

const fs = require('fs');
dataHTML = fs.readFileSync("./main.html", 'utf8');
dataCSS = fs.readFileSync("./main.css", 'utf8');
dataJS = fs.readFileSync("./main.js", 'utf8');


//create a server object:
http.createServer( function (req, res) {
    res.write(dataHTML); //write a response
    res.write("<style>"+dataCSS+"</style>"); //write a response
    res.write("<script>"+dataJS+"</script>"); //write a response
    res.end(); //end the response
  }).listen(3000, function(){
   console.log("server start at port 3000"); //the server object listens on port 3000
  });