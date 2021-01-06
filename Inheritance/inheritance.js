// create a plant constructor

function Plant() {
    this.country = "Mexico";
    this.isOrganic = true;
}

// Add the showNameAndColor method using Plant() prototype
Plant.prototype.showNameAndColor = function() {
    console.log("I am a " + this.name + " and my color is " + this.color)
}

// Add amIOrganic method to the plant prototype property
Plant.prototype.amIOrganic = function() {
    if (this.isOrganic) {
        console.log("I am organic baby!");
    }
}

function Fruit(fruitName, fruitColor) {
    this.name = fruitName;
    this.color = fruitColor;
}

// Set the Fruit's prototype to Plant's constructor
// thus inheriting all of Plant prototype methods and properties.

Fruit.prototype = new Plant();

// create a new object, aBanana, with the Fruit constructor
let aBanana = new Fruit("Banana", "Yellow");

// Here, aBanana uses the name property from the aBanana object prototype, which is Fruit.prototype:
console.log(aBanana.name); // Banana

//// Uses the showNameAndColor method from the Fruit object prototype, 
//which is Plant.prototype. The aBanana object inherits all the properties and methods from both the Plant and Fruit functions.
(aBanana.showNameAndColor());

