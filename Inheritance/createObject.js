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
console.log(player1['name'])

