let precio;

function pedirPrecio(){
    precio = Number( prompt('Ingrese el Precio'));
    let resultado = aplicarDescuento( precio);
    document.textContent = 'El Precio final es $' + resultado;
}

function aplicarDescuento(valor){
    let final = valor - (valor * 0.10);
    //console.log(final);
    return final;
}