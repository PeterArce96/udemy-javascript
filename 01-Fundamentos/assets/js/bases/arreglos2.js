let juegos = ['Zelda', 'Mario', 'PES', 'FIFA'];

// .lenght --> Nos devuelve la cantidad de elementos del arreglo
console.log('Largo:', juegos.length);

let primero = juegos[2 - 2]; //[0] - ZELDA
let ultimo = juegos[ juegos.length - 1]; //[3] - FIFA

// console.log(primero);
// console.log(ultimo);

// forEach() --> ejecuta una instrucción por cada uno de los elementos que tenga el arreglo
juegos.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr})
});

// .push() --> inserta un nuevo elemento al final del arreglo y devuelve el nuevo largo(lenght) del elemento
let nuevaLongitud = juegos.push('Counter');
console.log({nuevaLongitud, juegos})

// .unshift() --> inserta un elemento al inicio del arreglo
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({nuevaLongitud, juegos});

// .pop() --> Borrar el último elemento del arreglo
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos})

// .splice() --> Borrar un elemento en una posición específica, recibe un punto inicial del arreglo y cuantos quiere borrar
let pos = 1;
let juegosBorrados = juegos.splice(pos, 2);  //elementos a borrar Zelda y Mario
console.log({juegosBorrados, juegos})

// .indexOf() --> Saber la posición o índice de un elemento. Se diferencia entre minúsculas y mayúsculas. Si no se encuentra el elemento a buscar, se devuelve un "-1", que quiere decir que no se encontró
let saberIndex = juegos.indexOf('PES');
console.log({saberIndex});