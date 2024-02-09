// console.log('Hola Mundo');

// alert("Hola") -->Capitulo, Orden y lugar de importaciones


// Creando una variable llamada "a" al cuál se le asigan un valor de 10;
// let a = 10;
// var b = 10;
// const c = 10;

// Podemos cambiar sus valores
// a = 20;
// b = 30;
// c = 20; No se puede modificar el valor de una constante

// Creamos Variables
// let a = 10; 
// let b = 10; 
// let c = 10; 
// let d = 10; 
// let x = a + b; 

// Otra forma de crear varia variables, con comas
// let a = 10, 
//     b = 20, 
//     c = 30, 
//     d = 40, 
//     x = a + b;

// tipos de mensajes de consola
// console.log(x);
// console.warn(x)
// console.error(x)

// console es el Objeto y .log es el método 
// console.log( 'a', a);
// console.log( 'b', b);
// console.log( 'c', c);

// Las llaves "{}" significa que ahora son objetos
// %c para incrustar un estilo
// console.log('%c Mis variables', 'color:blue; font-weight: bold' );
// console.log({a})
// console.log({b})
// console.log({c})
// console.table({a,b,c,d,x})

// Vamos a cambiar los valores de las variables
let a = 10, 
    b = 20, 
    c = 'Hola ', 
    d = 'Spiderman', 
    x = a + b;

// consoles.table(), crea una tabla para lo que se desea imprimir en consola


// El operador "+" va concatenar los valores de c y d porque los 2 son strings. van a aparecer juntos, por lo que es mejor colocarle un espacio al final al valor de C
const saludo = c + d;
// console.log(saludo)

c = 'Hola de nuevo';

// Si creamos una variable con VAR, lo coloca en un objeto global llamado WINDOW y lo podemos llamar desde otro archivo JS, pero no es buena práctica
var miNombre = 'Fernando';