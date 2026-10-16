let edad = Number( prompt('Ingrese su edad') );
if( edad >= 18){
    console.log('Bienvenido');
    document.write('Bienvenido');
} else {
    console.warn('Acceso denegado');
    document.write('Acceso denegado');
}

let usuario = prompt('Ingrese el usuario');
let clave = prompt('Ingrese la contraseña');

if( usuario == 'admin' && clave == '1234'){
    document.write('<h2> Bienvenido al Sistema </h2>');
} else {
    document.write('<h2 class="danger"> Usuario o contaseña Invalidos </h2>');
}
