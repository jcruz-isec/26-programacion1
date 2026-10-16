//                0        1        2         3
let empleados = ['Juan', 'Sofia', 'Lucas', 'Mailen'];

// Para agregar elementos
empleados.push('Zoe');
// Para modificar un elemento
empleados[2] = 'Lucas Ruiz';
// Para eliminar elemento por posición ( eliminamos a Maile)
empleados.splice(2,1);

let i = 0;
while( i <= 3){
    mostrarEmpleado( empleados[i]  );
    i= i + 1;
}

/*
mostrarEmpleado( empleados[0]  );
mostrarEmpleado( empleados[1]  );
mostrarEmpleado( empleados[2]  );
mostrarEmpleado( empleados[3]  );
*/

console.table( empleados );

function mostrarEmpleado(nombre){
    // Seleccionamos el ul del HTMl
    const ul = document.querySelector('ul');
    // Agregamos una elemento
    ul.innerHTML =  ul.innerHTML +  `<li>${nombre}</li>`;   // alt 96 ` 
    // ul.innerHTML += `<li>${nombre}</li>`;   // alt 96 ` 
} 

let letra = 'a';
letra += 'b';
letra += 'c';
console.log(letra);