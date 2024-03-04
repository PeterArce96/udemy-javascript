
const dia = 0; //0- DOMINGO

// El SWITCH, hace una evaluación con el triple igual '===', es decir si ponemos dia = '0', no cumpliría y retornaría el default, si se necesita trabajar con strings, en los case también tendría que poner strings
switch (dia) {
    case 0:
        console.log('Domingo');
        break; //sale del switch si se cumple
    case 1:
        console.log('Lunes');
        break
    case 2:
        console.log('Martes');
        break;
    default:
        console.log('No es Lunes, Martes o Domingo')
}