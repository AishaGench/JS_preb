let mid = [3,4];
let arr = [1,2,...mid,5,6];
console.log(arr);

let str = 'Hello';
var chars = [...str];
console.log(chars);

//Rest operators collects all elements into array
function fun(...theArgs){
  console.log(theArgs.length);
}
fun();
fun(5);
fun(5,6,7)

function multiply(multiplier,...theArgs){
  return theArgs.map(element => multiplier * element);
}

let arry = multiply(2,15,25,42);
console.log(arry);
