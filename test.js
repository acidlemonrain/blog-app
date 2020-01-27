
function A(){

}
A.prototype.say_hello = ()=>{
  console.log('say hello');}

function b(){}
b.prototype = Object.create(A.prototype)

console.log(b.prototype);
console.log(A.prototype);


A.prototype.say_hello()


