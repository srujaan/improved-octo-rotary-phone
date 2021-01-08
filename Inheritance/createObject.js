// Object literal
const player = {
    name: "king james",
    isNBAPlayer: true,
    isGOAT: true,
    location: "LA"
};

// Object.create very simply returns a new object with the specified 
//PROTOTYPE and any additional properties you want to add
const player1 = Object.create(player);


//Student constructor function
function Student() {
}

// student prototype
Student.prototype.sayName = function() {
    console.log(this.name);
}

// EightGrader constructor function
function EightGrader(name) {
    this.name = name;
    this.grade = 8;
}

EightGrader.prototype = Object.create(Student.prototype);
const carl = new EightGrader("carl");
carl.sayName()
console.log(carl.grade);

//create object with proto

function Library(book, publisher) { 
}

Library.prototype.name = function() {
    console.log("dan brown");
}

function area(city, country) {
    this.city = city;
    this.country = country;
}

area.prototype = Object.create(Library.prototype);
let manhatten = new area('manhatten', 'NY');
console.log(manhatten.city);
manhatten.name()
