//Creating array
var scores = new Array(); //empty
var numbers = new Array(10); //array with initial size 10
var myNumbers = new Array(9,10,4,5); //array with initial elements

var athletes = Array(3); //array with initial size 3
var signs = Array('Red'); //array with one elements

var emptyarray = [];
var colors = ['red','green','blue'];

//Accesing array elements
var students = ['Aisha', 'Dennis', 'Sevde','Beyza']
console.log(students);
console.log(students.toString());
console.log(students[0]);

//Basic operations on arrays
students.push('Betul'); //adds element to end of an Array
console.log(students);

students.unshift('Nurgul'); //adds element to beginning of an Array
console.log(students);

students.pop(); //removes an element from the end of an arrays
console.log(students);

students.shift(); //removes an element from the beginning of an arrays
console.log(students);

var index = students.indexOf('Aisha');
console.log(index);

students.splice(0,1); //delete elements in Array
console.log(students);

students.splice(2,0,'Heyyyy'); //insert elements
//2 - statring position in the array that new elements will be inserted
//0 - instruct the splice() method to not to delete any array elements
//third arguments, fourth argument, and so on are the new elements that are inserted into arrays
console.log(students);

var array =[1,30,4,21];
console.log(array.sort);//cast elements to string and compares the sgtrings to determine the orders

//Multidimensional Array
var activities =[['Work', 9],['Eat', 2],['Commute', 2],['Play Game', 2],['Sleep',7]];
console.log(activities[0]);
console.log(activities[0][1]);

//Task for array
let mounths = ['January','February', 'March', 'April','June', 'July','August','September', 'Oktober', 'November', 'December'];
console.log('The mounth name is '+ mounths[0]);
