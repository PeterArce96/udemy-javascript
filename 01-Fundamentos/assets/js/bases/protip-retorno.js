
// function crearPersona(nombre, apellido){
//     return {
//         // cuando el nombre de la propiedad es igual al del valor, no hace falta ponerlo 2 veces
//         // nombre: nombre,
//         // apellido: apellido
//         nombre,
//         apellido
//     }
// }

// Función de Flecha
// colocar el objeto entre paréntesis para que js sepa que es un objeto y no el cuerpo de una función
const crearPersona =  (nombre, apellido) => ({nombre, apellido})


const persona = crearPersona('Fernando', 'Herrera');
console.log(persona);

// --------------------------------------------
function imprimeArgumentos() {
    console.log(arguments);
}

// const imprimeArgumentos2 = () => {
//     // una función flecha no maneja o no crea el objeto de "arguments", solo las tradicionales, pero se puede manejar de otra manera
//     console.log(arguments)
// }

const imprimeArgumentos2 = (edad, ...args) => {
    console.log({edad, args})
}
// ... -> parámetro rest, create un arreglo con cada argumento enviado
// Después del parámetro rest no pueve venir otro argumento. (...args, otraCosa) XX
// Pero si otro parámetro adelante (edad, ...args)

imprimeArgumentos2(10, true, false, 'Fernando', 'Hola')

// -------------------------------------------
const imprimeArgumentos3 = (edad, ...args) => {
    // el 10 lo está obteniedo la "edad"
    return args;
}

const [casado, vivo, nombre, saludo] = imprimeArgumentos3(10, true, false, 'Fernando', 'Hola')
console.log({casado, vivo, nombre, saludo}) //crea un objeto

const {apellido: nuevoApellido} = crearPersona('Fernando', 'Herrera');
// nuevoApellido, nuevo nombre de la variable
console.log(nuevoApellido);

// Estructuración de argumentos
const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    // edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hukbuster'],
};

// edad = 15, por defecto cuando no tenga la edad
const imprimePropiedades = ({nombre, codeName, vivo, edad = 15, trajes}) => {

    console.log(nombre);
    console.log(codeName);
    console.log(vivo);
    console.log(edad);
    console.log(trajes);
}

imprimePropiedades(tony);