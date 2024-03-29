/*
    2C = Two of Clubs (Tréboles)
    2D = Two of Diamonds (Diamantes)
    2H = Two of Hearts (Corazones)
    2S = Two of Spades (Espadas)

*/
// Sintáxis del Patrón Módulo (PROTECCIÓN DEL CÓDIGO)
// función anónima autoinvocada
// (() => {

// })();

const miModulo = (() => {
    'use strict' //Para que JS sea estricto al evaluar el código
    // Primer paso de optimización, reducimos los tipos de variables, agregando la (,) al final de la inicialización de variables.

    let deck = [];

    const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

    // let puntosJugador = 0,
    //     puntosComputadora = 0;
    let puntosJugadores = [];

    // Referencias del HTML
    const btnPedir = document.querySelector('#btnPedir'),
        btnNuevo = document.querySelector('#btnNuevo'),
        btnDetener = document.querySelector('#btnDetener');

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHTML = document.querySelectorAll('small');
    // divCartasJugador = document.querySelector     ('#jugador-cartas'),
    // divCartasComputadora = document.querySelector('#computadora-cartas'),


    // Esta función inicializa el juego
    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck();
        puntosJugadores = [];

        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }

        // puntosJugador = 0;
        // puntosComputadora = 0;

        puntosHTML.forEach( elem => elem.innerText = 0);
        // puntosHTML[0].innerText = 0;
        // puntosHTML[1].innerText = 0;
        divCartasJugadores.forEach( elem => elem.innerHTML = '');
        // divCartasComputadora.innerHTML = '';
        // divCartasJugador.innerHTML = '';

        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }

    // Función que crea una nueva baraja
    const crearDeck = () => {
        
        deck = []; //reinicializando el deck

        for ( let i = 2; i <= 10; i++){
            for (let tipo of tipos) {
                deck.push(i + tipo); 
            }
            
        }

        for (let esp of especiales) {
            for (const tipo of tipos) {
                deck.push(esp + tipo);
            }
        }

        // console.log(deck);

        // Ordenar la baraja de forma aleatoria, con el método shuffle de Undercore.js
        // deck = _.shuffle(deck);

        return _.shuffle(deck);
    }

    

    // Función que permite tomar una carta
    const pedirCarta = () => {

        if (deck.length === 0){
            throw 'No hay cartas en el deck';
        }

        // remueve el último elemento del arreglo y lo regresa
        // const carta = deck.pop(); 

        // console.log(deck)
        // console.log(carta)
        // return carta;

        return deck.pop();
    }

    // deck = []; // para que lea el mensaje (throw) cuando ya no haya cartas

    // pedirCarta();

    const valorCarta = (carta) => {
        // Los strings se pueden trabajar como arreglos, el primer dígito de la carta es la posición 0
        // substring() --> extrae caracteres desde un indiceA hasta un indiceB sin incluirlo.
        const valor = carta.substring(0, carta.length - 1);
        return (isNaN(valor)) ?
                ((valor === 'J') ? 11 : 
                (valor === 'Q') ? 12 :
                (valor === 'K') ? 13 : 14 )
                : valor * 1;

        // console.log({valor});
        // let puntos = 0;

        // isNaN() --> evalua si lo que está dentro del paréntesis es un número o no
        // if( isNaN( valor ) ){
            
        //     puntos =    valor === 'J' ? 11 :
        //                 valor === 'Q' ? 12 :
        //                 valor === 'K' ? 13 : 14;

        // }else {
        //     puntos = valor * 1; //convertirlo de string a number
        // }

        // console.log(puntos)
    }

    // turno: 0 = primer jugador y el último será la computadora
    const acumularPuntos = (carta, turno) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${carta}.png`;
            imgCarta.classList.add('carta');
            divCartasJugadores[turno].append(imgCarta);
    }

    const determinarGanador = () => {

        const [puntosMinimos, puntosComputadora] = puntosJugadores;

        setTimeout(() => {
            if (puntosComputadora === puntosMinimos) {
                alert('Nadie Gana :(');
            } else if(puntosMinimos > 21){
                alert('Computadora Gana!')
            } else if(puntosComputadora > 21){
                alert('Jugador Gana!')
            } else {
                alert('Computadora gana!')
            }
        }, 100); //milésimas de segundo
    }

    // TURNO DE LA COMPUTADORA
    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = 0;

        do {
            const carta = pedirCarta();

            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
            crearCarta(carta, puntosJugadores.length - 1);
            // puntosComputadora = puntosComputadora + valorCarta(carta);
            // puntosHTML[1].innerText = puntosComputadora;
            
            // const imgCarta = document.createElement('img');
            // imgCarta.src = `assets/cartas/${carta}.png`;
            // imgCarta.classList.add('carta');
            // divCartasComputadora.append(imgCarta);

            // if(puntosMinimos > 21){
            //     break;
            // }

        } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

        determinarGanador();
    }


    // const valor = valorCarta(pedirCarta());
    // console.log(valor)

    // EVENTOS
    // Aquí necesitamos escuchar cuando se haga clic en el botón de Pedir Carta, por eso que creamos un evento para eese botón con addEventListener(el primer argumento es el evento que deseas escuchar, el segundo argumento es la función que se debe realizar al hacer click)
    // La función dentro del evento se llama CALLBACK, es una función que hace de argumento a otra función
    btnPedir.addEventListener('click', () => {
        // console.log('click')
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);

        crearCarta(carta, 0);
        // console.log(carta)

        // suma de puntos de cada carta pedida
        // puntosJugador = puntosJugador + valorCarta(carta);

        // colocar la suma de puntos en el small del html, para verificar los puntos del jugador, como creamos la variable global puntosHTML con querySelectorAll, necesitamos obtener solo el primero, por lo que es el índice 0
        // puntosHTML[0].innerText = puntosJugador;


        // tenemos que crear las cartas pedidas
        // <img class="carta" src="assets/cartas/10C.png" alt="">
        // const imgCarta = document.createElement('img');
        // imgCarta.src = `assets/cartas/${carta}.png`;
        // imgCarta.classList.add('carta');

        // insertamos la imgCarta en el HTML
        // divCartasJugador.append(imgCarta);

        if(puntosJugador > 21){
            console.warn('Lo siento mucho, perdiste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        } else if( puntosJugador === 21){
            console.warn('21, genial!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador)
        }

        // console.log(puntosJugador);
    });

    btnDetener.addEventListener('click', () => {

        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0]);
    });

    btnNuevo.addEventListener('click', () => {

        inicializarJuego();


    });

    return{
        nuevoJuego: inicializarJuego
    };

})();


