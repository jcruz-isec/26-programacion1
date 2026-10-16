let porcentaje = 0.21;  // Variable Global
function descuento(){  // Definición de la fn
    porcentaje = 2
    let final = 3000 * porcentaje;
    console.log('El precio final es ' + final);
}
// Función Flecha que llama a otra función
const descuento2 = (precio) => {
    let final = precio - (precio * porcentaje);
    console.log('El precio2 final es ' + final);
    mostrarPrecio(final);
}

const mostrarPrecio = (valor) => {
    // document.write(`<h4> El precio es $ ${valor} </h4>`);
    document.querySelector('h4').innerText = `El precio es $ ${valor}`;
}

const pedirPrecio = () => {
    let precio = Number( prompt('Ingrese el precio'));
    // Invocamos a la función
    descuento2(precio);
}

