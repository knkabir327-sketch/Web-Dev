let student={
    name:"pranjal singh",
    age:30,
    address:"gorakhpur"
};
// console.log(student);
console.log(typeof(student));
 student=JSON.stringify(student);
console.log(typeof(student));


student=JSON.parse(student);
console.log(typeof(student));



