const fs = require("fs");
// console.log(fs);

console.log("hello 1");

// let result = fs.readFileSync('file.txt',"utf-8")
// console.log(result);

// fs.readFile('file.txt',"utf-8",(error,data)) 




// //async -> non blocking operations
fs.readFile('file.txt',"utf8",(error,data)=>{
    if(error) {
        throw error;
    }
    else{
        console.log(data);
        
    }
})

console.log("hello 2");