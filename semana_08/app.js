let carta = [
    { nombre:'Cafe con leche', precio: 3000, categoria: 'cafes'},
    { nombre:'Ñoquis', precio: 8000, categoria: 'pastas'},
    { nombre:'Cafe cortado', precio: 3200, categoria: 'cafe'},
    { nombre:'Ravioles', precio: 10000, categoria: 'pastas'},
    { nombre:'Helado', precio: 4500, categoria: 'postres'}
];


const categorias = ['Cafe', 'pastas', 'postres', 'bebidas'];
const fotos = [
    "images/foto1.jpg",
    "images/foto2.jpg",
    "images/foto3.jpg",
    "images/foto4.jpg"
];

const img = document.querySelector('#foto');
const btnAnterior = document.querySelector('#btnAnterior');
const btnSiguiente = document.querySelector('#btnSiguiente');

const inputNombre = document.querySelector('#nombre');
const inputPrecio = document.querySelector('#precio');
const selectCategoria = document.querySelector('#categoria');
const formulario = document.querySelector('form');
const ul = document.querySelector('.list-items');
const pMensaje = document.querySelector('#mensaje');

const inputBuscar = document.querySelector('#buscar');

inputBuscar.addEventListener('input', (evento)=>{
    const texto = inputBuscar.value.toLowerCase();
    //const texto = evento.target.value;
    const nuevoArray = carta.filter( elemento => {
        return elemento.nombre.toLowerCase().includes(texto);
    });
    mostrarCarta(nuevoArray);
})


/*  -----   Función 1: Muestra menú    ---- */
function mostrarCarta( carta ){
    ul.innerHTML = "";  // Limpiamos el contenido de la UL
    let i = 0;
    while( i < carta.length){
        const li = document.createElement('li');

        const strong = document.createElement('strong');
        strong.textContent = carta[i].nombre;

        const em = document.createElement('em');
        em.textContent = "$" + carta[i].precio;

        const btn = document.createElement('button');
        btn.textContent = 'Borrar';

        li.appendChild(strong);
        li.appendChild(em);
        li.appendChild(btn);

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
    // Validamos datos
    if( nombre.trim() == "" || precio.trim() == ""){
        pMensaje.textContent = 'Por favor, complete todos los campos';
        return;
    }

    // Agregamos el menu a la carta
    carta.push({ nombre, precio, categoria});
    // Llamamos a la función mostrar carta
    mostrarCarta(carta);
    // Limpiamos los controles
    inputNombre.value = "";
    inputPrecio.value = "";
    selectCategoria.value = "";
    pMensaje.textContent = "";
});



/*  -----   Función 3: Elimna un menú  ---- */

/*  -----   Función 4: Edita un menú   ---- */

/*  -----   Función 5: Carga las categorías  ---- */
function cargarCategoria( categorias){
    for (let i = 0; i < categorias.length; i++) {
        const elemento = categorias[i];

        const op = document.createElement('option');
        op.textContent = elemento;
        op.setAttribute('value', elemento);
        selectCategoria.appendChild(op);
    }
}

let i = 0;
btnSiguiente.addEventListener('click', () => {
    i++;
    const url = fotos[i];
    img.setAttribute('src', url);
});

btnAnterior.addEventListener('click', () => {

});


cargarCategoria(categorias);
// Invocamos a la función
mostrarCarta( carta );