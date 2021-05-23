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
var y = x * 4 - x++;
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

var num = 12;
var num2 =5;
 if(num > num2){
   console.log("Firts number " + num + " is greater than second number " + num2 );
 }else{
   console.log("Second number " + num2 + " is greater than first number " + num);
 }

var applesCount = 20;
var orangesCount = 30;
var pearsCount = 30;
var comp = applesCount < orangesCount || orangesCount >= pearsCount;
console.log(comp);

var outsideWeather;
var degree;
outsideWeather = "Shinny";
degree = 70;
var comp2 = (!(outsideWeather == "Raining" || degree == 70));
console.log(comp2);

var b =2;
var res = ++b == 2 || --b == 2 && --b == 2;
console.log(res);

var x = true, z = true;
var y = 20;
x =(y != 10) || (z = false);
console.log(x);
