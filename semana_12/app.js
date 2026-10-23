const h1 = document.querySelector('h1');
const listGastos = document.querySelector('#listGastos');
const btnNuevo = document.querySelector('#btnNuevo');
// controles del formulario
const inputNombre = document.querySelector('#nombre');
const inputValor = document.querySelector('#valor');
const btnGuardar = document.querySelector('#btnGuardar');
// Seleccionamos el Dialog desde JS
const dialog = document.querySelector('#gastoDailog');

let total = 10000;
let gastos = [ ];


// Escuchamos el evento del formulario
btnGuardar.addEventListener('click', () => {
    const nombre = inputNombre.value;
    const valor = inputValor.value;
    const id = gastos.length + 1;
    // Agregamos el gasto al array Global
    gastos.push({
        id: id,
        nombre: nombre,
        valor: valor
    });
    // Actualizamos la variable global total
    total = total - valor;
    // Actualizamos la UI
    actualizarTotal(total);
    mostrarGastos(gastos);
    dialog.close();

    guardarDatos( gastos );
})


function mostrarGastos(gastos){
    // Limpiamos el contenedor, para que no se dupliquen las cards
    listGastos.innerHTML = "";

    gastos.forEach( item => {
        const li =  document.createElement('li');
        li.classList.add('list-group-item');
        li.classList.add('d-flex');
        li.classList.add('justify-content-between');

        const h4 = document.createElement('h4');
        h4.innerText = item.nombre;

        const p = document.createElement('p');
        p.innerText = '$' + item.valor;

        li.appendChild(h4);
        li.appendChild(p);
        listGastos.appendChild(li);
    });

    
}

function  actualizarTotal(total) {
    h1.innerText = '$'+total;
}


//                    Clave         valor
localStorage.setItem('usuario', 'Jonathan');

function guardarDatos( gastos ){
                                    // Convertimos el Array a String
    localStorage.setItem("gastos", JSON.stringify( gastos) );
}

function leerDatos(){
                    // Convertimos el String a Array
    const datos =  JSON.parse( localStorage.getItem("gastos") );
    console.log( datos );
    gastos = datos;  // Asignamos a la variable global los datos del localStorage
    mostrarGastos(gastos); // Llamamos a ls fn mostrarGastos
}

leerDatos();