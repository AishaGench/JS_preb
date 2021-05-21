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
