//how to create an Object?
var hotel ={
  name:'Hilton',
  room:50,
  booked: true
}
console.log(hotel.name); // Hilton
console.log(hotel.room); // 40
console.log(hotel.booked); //true


//Object constructor function
function hotel(name,rooms,booked){
  this.name = name:
  this.rooms = rooms;
  this.booked =booked;

  this.checkAvailability = function(){
    return this.rooms - this.booked;
  }
}

var person = {
  firstName : 'Aysegul',
  lastName : 'Smith'
}
console.log(person);
console.log(person.firstName);

//if property contains space, place it inside quotes

var address = {
  'building no': 5506,
  street : 'Jones Branch',
  state : 'TX',
  country : 'USA'
}
console.log(address['building no']);
console.log(address['state']);

//adding a new property
person.age = 30;
console.log(person);

//delete a property
delete person.age;
console.log(person);

//Cheking if property exists
console.log('street' in address);

//Itering over properties of an object
var course ={
  name: 'JS Prep',
  url : 'https://github.com/AishaGench/JS_preb',
  subjects : ['es5', 'es6', 'js', 'ts']
}
for(var key in course){
  console.log(key + ":" + course[key]);

}
var myHonda = {
  color : 'red',
  wheels : 4,
  engine : {
    cylinders : 4,
    size : 2.2
  },
  hp : [300,500,100]
}
​
console.log(myHonda.engine.size);
console.log(myHonda.hp[0]);
