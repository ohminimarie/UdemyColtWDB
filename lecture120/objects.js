//Wanted to model a single person: name, age, city
//I could use an array like this:
var person = ["Cindy", 32, "Missoula"];

//to retrieve the person's hometown:
person[2] //this is not very meaningful code

//what if I accidentally reversed the order?

var person2 = ["Travis", "Los Angeles", 21];

//PERFECT USE CASE FOR AN OBJECT
var person = {
  name: "Cindy",
  age: 32,
  city: "Missoula"
};

//Objects store data in key-value pairs
//Note: unlike arrays, objects have no order.

var person = {
  name: "Travis";
  age: 21,
  city: "LA";
};

//bracket notation, similar to arrays:
console.log(person["name"]);
//dot notation:
console.log(person.name);

var dog = {
  name: "Rusty",
  breed: "Mutt",
  age: 3
}

dog               // Object {name: "Rusty", breed: "Mutt", age: 3}
dog["age"]        // 3
dog.age           // 3

//RETRIEVING DATA
//There are a few differences between the 2 notations

















