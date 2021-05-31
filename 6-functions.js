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

var divide = function(a,b){
  return a / b;
}

var d = divide(20,10);
console.log(d);

console.log('=====================');
//Passing a function to another functions
function sum(a,b){
  return a + b
}
function average(a,b,fn){
  return fn(a,b)/2
}
var res = average(10,20,sum);
console.log(res);

console.log('=====================');
//Example Utility Functions

function cmToIn(length){
  return length/2.54;
}

function inToCm(length){
  return length * 2.54;
}

function convert(fn,length){
  return fn(length);
}

var inches = convert(cmToIn,10);
var cm = convert(inToCm,10);
console.log(inches);
console.log(cm);

console.log('=====================');

//Callback functions : A callback is a function passed as an argument to another function
//A callback function can run after another function has finished

function myDisplayer(some){
  console.log(some);
}

function myCalculator(num1,num2,myCallback){
  var sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5,5,myDisplayer);
