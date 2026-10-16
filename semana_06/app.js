let carta = [
    { nombre:'Cafe con leche', precio: 3000, categoria: 'cafes'},
    { nombre:'Ñoquis', precio: 8000, categoria: 'pastas'}
];
const inputNombre = document.querySelector('#nombre');
const inputPrecio = document.querySelector('#precio');
const selectCategoria = document.querySelector('#categoria');
const formulario = document.querySelector('form');
const ul = document.querySelector('.list-items');


/*  -----   Función 1: Muestra menú    ---- */
function mostrarCarta( carta ){
    ul.innerHTML = "";  // Limpiamos el contenido de la UL
    let i = 0;
    while( i < carta.length){
        const li = document.createElement('li');
        li.textContent = carta[i].nombre;

        ul.appendChild(li);
        i++;
    }
}
/*  -----   Función 2: Ingresa un menú ---- */
formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault(); // Evito la recarga del formulario
    // Leemos los valores de los controles
    const nombre = inputNombre.value;  
    const precio = inputPrecio.value;
    const categoria = selectCategoria.value;
    // Agregamos el menu a la carta
    carta.push({ nombre, precio, categoria});
    // Llamamos a la función mostrar carta
    mostrarCarta(carta);
    // Limpiamos los controles
    inputNombre.value = "";
    inputPrecio.value = "";
    selectCategoria.value = "";
});



/*  -----   Función 3: Elimna un menú  ---- */

/*  -----   Función 4: Edita un menú   ---- */

// Invocamos a la función
mostrarCarta( carta );