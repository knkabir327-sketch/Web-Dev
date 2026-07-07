// let add = (a,b)=>{
//     console.log(a+b);
// }
// let sub = (a,b)=>{
//     console.log(a-b);  
// }
// let mul = (a,b)=>{
//     console.log(a*b)
// }
// let div = (a,b)=>{
//     console.log(a/b); 
// }
// // module.exports = {add,sub,mul,div}
export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

export function mul(a, b) {
    return a * b;
}

export function div(a, b) {
    return a / b;
}
export default {add,sub,mul,div}