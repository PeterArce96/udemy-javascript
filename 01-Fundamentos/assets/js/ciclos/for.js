
const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For Tradicional');

// entre parentesis va el SCOPE, la primera condición es la inicialización de la variable, la segunda es la condición del While, y la tercera es el incrementador.
for( let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
}

// FOR IN - La misma operación del anterior FOR
// la variable 'i' como iterador es un standard, si tuvieramos que crear un for dentro de otro for, no podemos utilizar el mismo 'i', crearíamos un 'j'
console.warn('For in');
for( let i in heroes) { 
    console.log(heroes[i])
}
// el i solo va iterar entre la cantidad de elementos que tenga el arreglo 'heroes'
//el i es diferente al del for anterior, porque es creado solo en este scope

// FOR-OF
console.warn('For of');
// utilizado para obtener referencias a valores de objetos o arreglos de manera sencilla
// en el for of, no se acostumbra a poner la variable iterable como 'i', si no ponen el singular de la palabra del arreglo
for (let heroe of heroes) {
    console.log(heroe);
}