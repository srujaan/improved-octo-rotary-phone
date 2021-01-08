let animal = {
    eats: true,
    // method inside animal
    walk: function() {
        return "Animal walking";
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

// prototypes can be longer

let longEar = {
    earLength: 10,
    __proto__: rabbit
}

console.log(longEar.walk())
