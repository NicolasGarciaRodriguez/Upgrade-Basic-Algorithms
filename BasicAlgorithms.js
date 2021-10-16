// 1. Variables

const myFavouriteHero = "Hulk"
const x = 50
const h = 5
const y = 10
const z = h + y


// 2. Variables avanzadas

const character = {name: 'Jack Sparrow', age: 10};

character["age"] = 25

// --------------------------------

const firstName = 'Jon'; 
const lastName = 'Snow'; 
const age = 24; 

const frase = `Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos`

console.log(frase)

// ------------------------------------

const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};

console.log(toy1["price"] + toy2["price"])

// -----------------------------------

let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};