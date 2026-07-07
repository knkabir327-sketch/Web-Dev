const http = require("http");

// console.log(http);

let server = http.createServer((req,res)=>{
    console.log(res);
    res.end("facebook page sent")
    
});

server.listen(3000)