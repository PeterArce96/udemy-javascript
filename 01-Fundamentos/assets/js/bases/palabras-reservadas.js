// Se recomienda crear los archivos, si en caso tienen de 2 a más palabras, separadas por un guíon. No se recomienda palabras capitalizadas o con caracteres como el espacio o la letra "ñ"

// let const = 123; //SyntaxError: Unexpected token 'const'
// No podemos poner como nombre de variable una palabra reservada.

let constante = 123;

// No es permitido que el nombre de la variable empiece con números #
// Si pueden empezar con guión bajo o underscore
// Si se permite el simbolo de $

let objeto$ = 123; //permitido

// let objeto123.123 = 123; // no se permite, porque en JS el punto se considera que quisieramos acceder a un método o alguna propiedad propia de la variable objeto123

// guíon bajo para separar números
let precio99_99 = 123;
// Los nombres de las variables tienen que tener algo significativo para que sea más legible.

// UpperCamelCase para nombres de clases
class JuegoAnio{

}
// No es buena práctica colocar caracteres especiales como la "ñ"