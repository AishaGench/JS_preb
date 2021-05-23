//Arithmetic
console.log(3 + 5 * 4 - 6);

//Assignment
var x = 5;
x+=5;
console.log(x);

var a =50;
a= --a + a++ + a-- + ++a
console.log(a);

var a = 1;
a = -a-- + a++ / -a-- * --a;
console.log(a);

var x = 4;
var y =  x++;
console.log(y);

//Comparison
var one  = 1;
var one_again = 1;
var one_string = '1';

console.log(one  == one_again); //true
console.log(one  === one_again); //true
console.log(one == one_string); //true //same value even types are different
console.log(one === one_string); //false //types are different

//Logical
console.log((5<2) && (2>=3));
console.log((5<2) || (2>=3));
console.log(!(5==3));
