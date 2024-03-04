// OBJETOS {}
// son objetos que tienen PROPIEDADES, a su vez estas contienen pares y valores
// nombre es la LLAVE
// 'Tony Stark' es el VALOR de la llave
const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hukbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula':'Infinity War', //se recomienda ponerle comillas para que sepa que la llave es un STRING de 2 palabras separadas por un guion
};

console.log(personaje) //imprime el objeto con sus llaves alfabéticamente
console.log('Nombre', personaje.nombre); //1° forma de imprimir
console.log('Nombre', personaje['nombre']); //2° forma de imprimir
console.log('Edad:', personaje.edad);

console.log('Coords', personaje.coords); //coordenadas
console.log('Latitud', personaje.coords.lat); //Latitud

// Número de trajes
console.log('N° de Trajes', personaje.trajes.length) //3

// Último traje
console.log('Último traje', personaje.trajes[personaje.trajes.length-1]) //Para que sea dinámico

const x = 'vivo';
console.log('Vivo', personaje[x]);

// Imprimir la última película
console.log('Última película', personaje['ultima-pelicula']);

// Más DETALLES
// Borrar una propiedad
delete personaje.edad;
console.log(personaje);

// Crear una nueva propiedad en el Objeto
personaje.casado = true;

// Trabajar el OBJETO como un ARREGLO
// Cada arreglo tienen 2 valores (llave y Valor)
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// Aunque cambiemos de let a CONST el OBJETO, las propiedades pueden ser mutables.
// Lo que no se nos permite es darle otro valor a la propiedad
// personaje = 123;

// console.log(personaje)

// Object.freeze() --> Bloqueo de modificaciones a las Propiedades DIRECTAS del objeto
Object.freeze(personaje);

personaje.dinero = 1000000000; //intentamos crear una nueva propiedad
personaje.casado = false;

console.log(personaje); //No aparece la nueva propiedad del objeto porque está congelado y tampoco se modifican las propiedades que ya estaban declaradas en el objeto.

// Sin embargo, si podemos cambiar las propiedades no directas al objeto, o sea que están adentro del VALOR
personaje.direccion.ubicacion = 'Costa Rica'


// LISTADO de todas las PROPIEDADES del objeto en forma de ARREGLO
const propiedades = Object.getOwnPropertyNames(personaje);


// LISTADO de todos los VALORES del objeto en forma de ARREGLO
const valores = Object.values(personaje);

console.log({propiedades, valores})