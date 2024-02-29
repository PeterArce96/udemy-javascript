// TODOS LOS PRIMITIVOS SE PASAN POR VALOR
// TODOS LOS OBJETOS SE PASAN POR REFERENCIA

let a = 10;
let b = a;

a = 30;

console.log({a,b}); // "b" sigue valiendo 10, el primer valor de "a"

// -----------------------------------
let juan = {
    nombre: 'Juan'
};

let ana = {...juan}; //Operador Spread, para que apunte a otro espacio en memoria 

ana.nombre = 'Ana';

console.log({juan, ana}) // juan cambia de nombre a 'ANA'

// ----------------------------------
// const cambiaNombre = (persona) => {
//     persona.nombre = "Tony";
//     return persona;
// }

// let peter = { 
//     nombre: 'Peter' 
// };

// let tony = cambiaNombre(peter);

// el parametro persona ahora es "peter", por lo tanto el persona.nombre, afecta al objeto "peter" y le cambia el nombre a "Tony"

// console.log({peter, tony});

// Parámetro REST 
// cuando está en el argumento de una función
// const cambiaNombre = (...persona) => {
// }

// OPERADOR SPREAD
// Cuando está fuera del agumento de una función. Rompe la relación

const cambiaNombre = ({...persona}) => {
    persona.nombre = "Tony";
    return persona;
}

let peter = { 
    nombre: 'Peter' 
};

let tony = cambiaNombre(peter);
console.log({peter, tony});

// ARREGLOS
const frutas = ['Manzana', 'Pera', 'Piña'];
// const otrasFrutas= frutas;
const otrasFrutas= [...frutas];
// con el operador Spread se separa cada uno de los elementos que vienen en el arreglo y se retorna de una manera independiente rompiendo la relación

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});

// --------------------------
// Otra manera de romper la relación sin operador spread
const frutas2 = ['Manzana', 'Pera', 'Piña'];

console.time('slice'); //console.time nos ayuda a ver el tiempo que demora en hacer el método
const otrasFrutas2= frutas.slice();
console.timeEnd('slice');
// si yo no mando ningún argumento en el slice, retorna un nuevo arreglo rompiendo la relación

console.time('spread');
const otrasFrutas3= [...frutas2];
console.timeEnd('spread');

// VEMOS EL TIEMPO QUE TARDA EL "SLICE" Y EL "SPREAD" Y COMPROBAMOS QUE CON EL SPREAD ES MÁS RÁPIDO

otrasFrutas2.push('Mango');

console.table({frutas2, otrasFrutas2});
