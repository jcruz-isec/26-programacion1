const h1 = document.querySelector('h1');
const main = document.querySelector('main');
const btnNuevo = document.querySelector('#btnNuevo');
// controles del formulario
const inputNombre = document.querySelector('#nombre');
const inputValor = document.querySelector('#valor');
const btnGuardar = document.querySelector('#btnGuardar');
// Seleccionamos el Dialog desde JS
// const dialog = new bootstrap.Dialog('#exampleDialog');

let total = 10000;
let gastos = [
    { id:1, nombre: 'Cafe', valor: 5000},
    { id:2, nombre: 'Sube', valor: 3000}
]
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
    // dialog.hide();
})


function mostrarGastos(gastos){
    // Limpiamos el contenedor, para que no se dupliquen las cards
    main.innerHTML = "";

    gastos.forEach( item => {
        const card =  document.createElement('div');
        card.classList.add('card');
        card.classList.add('p-2');

        const h4 = document.createElement('h4');
        h4.innerText = item.nombre;

        const p = document.createElement('p');
        p.innerText = '$' + item.valor;

        card.appendChild(h4);
        card.appendChild(p);
        main.appendChild(card);
    });

    
}

function  actualizarTotal(total) {
    h1.innerText = '$'+total;
}

mostrarGastos(gastos)