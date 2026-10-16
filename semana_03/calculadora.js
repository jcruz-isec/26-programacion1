let numero1 = 0;
let numero2 = 0;
// Solicita el número y lo guarda en la variable global numero1
const pedirNumero1 = () => {
    numero1 = Number( prompt('Ingrese el número 1'));
}
// Solicita otro número y lo guarda en la variable global numero2
const pedirNumero2 = () => {

}
// Realizar suma
const sumar = () => {
    let resultado = numero1 + numero2;
    mostrarResultado(resultado);
}

// Muestra el resultado
const mostrarResultado = ( resultado) => {
    document.querySelector('h4').innerText = `El resultado es ${resultado}`;
}