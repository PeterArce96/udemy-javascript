
// Una forma de declarar un arreglo, decimos que va tener 10 elementos internamente. No es muy común
// const arr = new Array(10);
// console.log(arr) //(10) [empty × 10]

// Otra forma es solo con los corchetes, pero aquí no se específica de cuantos elementos es el arreglo. ARREGLO VACÍO
// const arr = []
// console.log(arr)

let videoJuegos = ['Mario 3', 'Megamam', 'Chrono Trigger'];
console.log({videoJuegos})

// Si queremos imprimir sólo el 1° Videojuego
console.log(videoJuegos[0]);

// Creamos otro arreglo
let arregloCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
    function() {}, //función tradicional
    () => {}, //función de flecha
    { a: 1},
    ['X', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr. Willy',
        'Woodman'
    ]]
];

// console.log({arregloCosas}) //JS ejecuta la operación del 4° elemento y luego lo inserta en el arreglo

console.log(arregloCosas[0]) // true
console.log(arregloCosas[2]) //Fernando

// Acceder a un arreglo dentro de otro arreglo
console.log(arregloCosas[7][3]) // Dr. Light
console.log(arregloCosas[7][4][1]) //Woodman