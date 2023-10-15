// var

var firstName; // undefined
firstName = 'fabian';
console.log(firstName);

var lastName = "Mauricio"; //declarar / asignar
lastName = 'Camilo'; // reasignar
console.log(lastName); 

var secondName = 'Mauricio'; //declarar / asignar
var secondName = 'Camilo'; // reasignar
console.log(secondName);

// let

let fruit = 'apple'; //declarar / asignar 
fruit = 'kiwi'; // reasignar
console.log(fruit);
//let fruit = 'banana'; <- no se puede volver a  redeclarar la misma variable en let


// const 

const animal = 'dog';
//animal = 'cat'; <- no se puede reasignar la misma variable en const
//const animal = 'snake'; <- no se puede volver a  redeclarar la misma variable en const
console.log(animal);


// utilizando arrays y metodos si podemos jugar con los valores en const

const vehicles = [];
vehicles.push("🚗");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);