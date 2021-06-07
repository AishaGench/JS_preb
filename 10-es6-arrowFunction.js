//es5
let x = function(a){
  return a;
}

//es6
let a = a => a;

//If we do not have any parameters
let y = function(){
  console.log('hello');
}

let y1 = () => {console.log('hello');}

//if we have multiple parameters
let z = (a,b,c) => a+b+c;

//multiline arrow functions
let sum = (a,b) => {
  let result = a+b;
  return result;
}

let total = arr =>arr.reduce(((a,b)=>a+b),5);
let arr = [5,10,20];
console.log(total(arr));
//5 + 5 = 10
//10 + 10 =20
//20 + 20 = 40
