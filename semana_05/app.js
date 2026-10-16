const peliculas = [
    { 
        titulo: 'La Odisea', 
        estreno: 2026, 
        genero: 'aventura', 
        poster: 'images/odisea.webp' 
    },
    { 
        titulo: 'Spider-Man: Brand New Day', 
        estreno: 2026, 
        genero: 'Ciencia ficcion', 
        poster: 'images/spiderman.webp' 
    },
    { 
        titulo: 'Rescatando al soldado Ryan', 
        estreno: 1998, 
        genero: 'belica', 
        poster: 'images/ryan.webp' 
    },
    { 
        titulo: 'Corazones de hierro', 
        estreno: 2014, 
        genero: 'belica', 
        poster: 'images/corazones.webp' 
    },
    { 
        titulo: 'Supergirl', 
        estreno: 2026, 
        genero: 'Ciencia ficcion', 
        poster: 'images/supergirl.webp' 
    },
    { 
        titulo: 'Avatar: Fuego y ceniza', 
        estreno: 2025, 
        genero: 'Ciencia ficcion', 
        poster: 'images/avatar.webp' 
    },
    { 
        titulo: 'El final de la calle Oak', 
        estreno: 2026, 
        genero: 'Suspenso', 
        poster: 'images/calle.webp' 
    },
    { 
        titulo: 'El padrino', 
        estreno: 1972, 
        genero: 'Drama', 
        poster: 'images/padrino.webp' 
    }
];
const contenedor = document.querySelector('#peliculas');

const titulo = document.querySelector('h1');
// Modificamos el contenido del h1
titulo.textContent = 'Aplicación de peliculas';

// Recibe un array de peliculas, lo recorre y lo muestra en el HTML
function mostrarPeliculas(array){
    // Limpiamos el contenedor
    contenedor.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        const pelicula = array[i];

        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const img = document.createElement('img');
        img.setAttribute('src', pelicula.poster );

        card.appendChild(img);

        const h4 = document.createElement('h4');
        h4.textContent = pelicula.titulo;
        // Agremos el contenido al padre
        card.appendChild( h4 );

        contenedor.appendChild( card );
    }
}

mostrarPeliculas(peliculas);