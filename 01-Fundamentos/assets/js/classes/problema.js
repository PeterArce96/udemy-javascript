// Problemática y necesidades de clases

const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`)
        // si solo queremos imprimir el nombre y ponemos ${nombre}, va a mandar un error porque la propiedad nombre del objeto fher no está en el scope de la función imprimir
        
    }
}
const pedro = {
    nombre: 'Pedro',
    edad: 15,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`)
        
    }
}

// fher.imprimir();
// pedro.imprimir();

// Upper camel case, el nombre de la función comienza con Mayúscula
function Persona(nombre, edad) {
    console.log('Se ejecutó esta línea');
    
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`)
    }
}
// la palabra reservada 'new' le indica a JS que quiero crear una nueva instancia de persona
const maria = new Persona('María', '18');
const melissa = new Persona('Melissa', '35');
// console.log(maria)
maria.imprimir();
melissa.imprimir();