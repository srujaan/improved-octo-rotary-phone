// Dog constructor
function Dog(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;   
}

// Dog prototype

Dog.prototype.bark = function() {
    return "Woof!"
}
let dog1 = new Dog(
    "Daisy",
    "Labrador",
    "black"
)

let dog2 = new Dog(
    "Jack",
    "Jack Russell",
    "White"
)

console.log(dog1.bark())
