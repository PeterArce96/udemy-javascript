// Clases básicas en JS

// Las clases tienen por defecto implementado el 'use strict'

class Persona {
    // Propiedades, se aconseja ponerlas debajo de la apertura de la Clase
    nombre = '';
    codigo = '';
    frase = '';

    constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase'){
        // contructor --> un método que se va a ejecutar en el momento que se crea una nueva instancia de la clase Persona
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;


    }
}

const spiderman = new Persona('Peter Parker', 'Spider', 'Soy tu amigable vecino Spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');
console.log(spiderman);
console.log(ironman);