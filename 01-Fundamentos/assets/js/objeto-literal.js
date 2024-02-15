// OBJETOS {}
// son objetos que tienen pares y valores
// nombre es la LLAVE
// 'Tony Stark' es el VALOR de la llave
let personaje = {
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