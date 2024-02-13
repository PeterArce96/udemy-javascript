
// STRINGS********
let nombre = "Peter Parker";
console.log(nombre);

// Podemos cambiarle el valor, no es necesario volver a declarar la variable con 'let' porque ya está declarada
nombre = 'Ben Parker';
console.log(nombre);

// otro forma de declarar Strings
nombre = "Tía May";
nombre = `Tía May`;

// typeof --> para saber que tipo de dato es una variable
console.log(typeof nombre)

nombre = 123;
console.log(typeof nombre) //aquí el tipo de variable ya cambia a "number"

// BOOLEANS*******
let esMarvel = true;
console.log(typeof esMarvel);

// NUMBERS*******
let edad = 33;
console.log(typeof edad);

edad = 33.0001;
console.log(typeof edad);

// UNDEFINED******
let superPoder;
console.log(typeof superPoder)
// La variable todavía no se ha inicializado con ningún valor

// NULL*******
let soyNull = null;
console.log(typeof soyNull); //object
// muchos navegadores consideran el tipo de dato de un null, un "objeto"

// Symbol*****
let symbol1 = Symbol('a');
let symbol2 = Symbol('a');
// Los símbolos permiten crear identificadores únicos a JS
console.log(typeof symbol1); //symbol
console.log(symbol1 === symbol2); //false