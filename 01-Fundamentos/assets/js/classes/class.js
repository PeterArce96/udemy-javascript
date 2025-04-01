// Clases básicas en JS

// Las clases tienen por defecto implementado el 'use strict'

class Persona {
    // Propiedades, se aconseja ponerlas debajo de la apertura de la Clase
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase'){
        // contructor --> un método que se va a ejecutar en el momento que se crea una nueva instancia de la clase Persona
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    // Sets y Gets
    // los sets no pueden tener el mismo nombre de la propiedad
    // Set --> para establecer un valor
    // Get --> para recuperar un valor
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }


    // Métodos en las clases
    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`)
    }
}

const spiderman = new Persona('Peter Parker', 'Spider', 'Soy tu amigable vecino Spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');

console.log(ironman);

// ironman.quienSoy();
spiderman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tía May';

console.log(spiderman.getComidaFavorita)
console.log(spiderman);