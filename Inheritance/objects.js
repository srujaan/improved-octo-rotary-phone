// OBJECT LITERAL
// Multiple ways to define an object, 
// better to use object literal
const myObject = {
    property: "Value!",
    ownProperty: 77,

    "Obnoxious property": function() { // object method
        console.log("Blah Blah!")
    }
}

//Access the property values
console.log(myObject.property);
console.log(myObject.ownProperty);
myObject["Obnoxious property"]();