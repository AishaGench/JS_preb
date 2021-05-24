function add(a,b){
  console.log('Total is :' + (a+b));
}
add(10,20);
add(4,5);
add(10,20,30);
add(4); //NaN

//Function overloading : in JavaScript not allowed
// function  addTen(a){
//   return (a + 10);
// }
//
// function  addTen(a,b){
//   return (a + b + 10);
// }
// var x = addTen(10,20);
// console.log(x);

//Functions are the first-class citizens in JS.
//You can pass functions to other functions as arguments
//You can return functions from other functions
//You can store functions in variables

var add2 = add;
add2(100,200);

console.log('=====================');

function multiply(a,b){
  return (a * b)
}
console.log(multiply(10,20));

//Ananymous function : function without name
var show = function(){
  console.log('This is a function');
}
show();
