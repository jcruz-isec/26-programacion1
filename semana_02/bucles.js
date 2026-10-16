let nota = Number(  prompt('Ingrese una nota:') );

while( nota < 0 || nota > 10 ){

    if( nota < 0 || nota > 10  ) {
        alert('Ingrese una nota Valida entre 1 y 10');
        nota = Number(  prompt('Ingrese una nota:') );
    }

}
// Si la no es menor que cuatro mostrar "Desaprobado"
// Si la nota es mayor o igual que cuatro y menor que siete mostrar "Aprobado"
// Si la nota es mayor o igual que siete mostrar "Promocionado" ||