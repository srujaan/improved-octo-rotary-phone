// create a People constructor function

function People() {
    this.superstar = "Michael Jackson";
}

// define "athelete" property on the people prototype so that
// athelete, so that "athlete" is accessible by all objects that
// that use the people() constructor

People.prototype.athelete = "Tiger Woods";

let famousPerson = new People();
famousPerson.superstar = "Steve Jobs";

// This will show the property from the famousPerson prototype 
//(People.prototype), since the athlete property
// was not defined on the famousPerson object itself.

console.log(famousPerson.athelete) // Tiger Woods

// In this example, the search proceeds up the prototype chain 
// and find the toString method on Object.prototype, 
// from which the Fruit object inherited—all objects ultimately 
// inherits from Object.prototype as we have noted before.

console.log (famousPerson.toString()); // [object Object]