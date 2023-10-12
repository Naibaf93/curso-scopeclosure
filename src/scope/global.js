/* Variables */

var a; // declarando
var b = 'b'; //delcarando y asignando
b = 'bb'; // reasignando
var a = 'aa'; // redeclarando

/* Global scope */

var fruit = 'apple';

function readFruit() {
    console.log(fruit);
}

readFruit();

function countries(){
    country = 'Colombia'; // global
    console.log(country);
}

countries();
console.log(country);