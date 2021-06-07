var x = 1;  //var key word global and function scoped so console write 2 / 2
if(x===1){
  var x  =2;
  console.log(x);
}
console.log(x);

let y =1;      //  let is block scoped
if(y===1){
  let y = 2;
  console.log(y);
}
console.log(y);

const num = 50; //it is constant variable doesnt change
//num = 40;
console.log(num); // it gives to an error (typeError: assigment to constant variable)

//Template strings
let firstName = 'Aysegul';
let lastName = 'Gench';
console.log('My name is : ' + firstName + ' ' + lastName); //concatenation
console.log(`My name is : ${firstName} ${lastName}`); // concatenation with back-tick
