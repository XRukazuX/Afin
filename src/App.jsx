import "./App.css";

function App() {
  const perfiles = [
    {
      id: 1,
      nombre: "Robert Downey Jr.",

      edad: 61,
      fotoPerfil:
        "https://media.themoviedb.org/t/p/w300_and_h450_face/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg",

      intereses: {
        comida: 4,
        deportes: 3,
        peliculas: 5,
        videojuegos: 3,
        ropa: 4,
      },

      gustos: {
        comida: ["Comida saludable", "Cocina internacional"],
        deportes: ["Entrenamiento", "Fitness"],
        peliculas: ["Ciencia ficción", "Marvel", "Sherlock Holmes"],
        videojuegos: ["Juegos de estrategia"],
        ropa: ["Moda elegante", "Trajes"],
        hobbies: ["Tecnología", "Meditación", "Artes marciales"],
      },
    },

    {
      id: 2,
      nombre: "Henry Cavill",

      edad: 43,
      fotoPerfil:
        "https://media.themoviedb.org/t/p/w300_and_h450_face/dgTD7Q9owL3DyX9uYoSX9KZeUUz.jpg",

      intereses: {
        comida: 4,
        deportes: 5,
        peliculas: 4,
        videojuegos: 5,
        ropa: 3,
      },

      gustos: {
        comida: ["Cocina casera", "Comida internacional"],
        deportes: ["Entrenamiento", "Jiu-jitsu", "Fitness"],
        peliculas: ["Fantasía", "Ciencia ficción"],
        videojuegos: ["The Witcher", "Warhammer", "Juegos de PC"],
        ropa: ["Moda clásica", "Estilo casual"],
        hobbies: ["Lectura", "Pintura", "Modelismo"],
      },
    },

    {
      id: 3,
      nombre: "David Thewlis",

      edad: 63,
      fotoPerfil:
        "https://media.themoviedb.org/t/p/w300_and_h450_face/gJqz8h5AKaVvOLS0hm5Vdvel6JB.jpg",

      intereses: {
        comida: 4,
        deportes: 2,
        peliculas: 5,
        videojuegos: 1,
        ropa: 3,
      },

      gustos: {
        comida: ["Gastronomía internacional"],
        deportes: ["Caminatas"],
        peliculas: ["Drama", "Cine independiente", "Fantasía"],
        videojuegos: [],
        ropa: ["Estilo clásico"],
        hobbies: ["Escritura", "Fotografía", "Literatura"],
      },
    },

    {
      id: 4,
      nombre: "Gary Oldman",

      edad: 68,
      fotoPerfil:
        "https://media.themoviedb.org/t/p/w300_and_h450_face/yhaSM5habNNI1Tf4ALRwRk3VvSZ.jpg",

      intereses: {
        comida: 4,
        deportes: 3,
        peliculas: 5,
        videojuegos: 2,
        ropa: 4,
      },

      gustos: {
        comida: ["Cocina internacional"],
        deportes: ["Actividad física"],
        peliculas: ["Drama", "Suspenso", "Cine clásico"],
        videojuegos: ["Videojuegos ocasionales"],
        ropa: ["Moda clásica", "Estilo formal"],
        hobbies: ["Música", "Fotografía", "Lectura"],
      },
    },

    {
      id: 5,
      nombre: "Scarlett Johansson",

      edad: 42,
      fotoPerfil:
        "https://media.themoviedb.org/t/p/w300_and_h450_face/mjReG6rR7NPMEIWb1T4YWtV11ty.jpg",

      intereses: {
        comida: 4,
        deportes: 5,
        peliculas: 5,
        videojuegos: 3,
        ropa: 4,
      },

      gustos: {
        comida: ["Cocina internacional"],
        deportes: ["Entrenamiento", "Fitness"],
        peliculas: ["Cine independiente", "Acción", "Drama"],
        videojuegos: ["Juegos de aventura"],
        ropa: ["Moda elegante", "Diseño"],
        hobbies: ["Música", "Actuación", "Canto"],
      },
    },

    {
      id: 6,
      nombre: "Gal Gadot",

      edad: 41,
      fotoPerfil:
        "https://media.themoviedb.org/t/p/w300_and_h450_face/AbXKtWQwuDiwhoQLh34VRglwuBE.jpg",

      intereses: {
        comida: 4,
        deportes: 5,
        peliculas: 4,
        videojuegos: 2,
        ropa: 4,
      },

      gustos: {
        comida: ["Cocina mediterránea"],
        deportes: ["Entrenamiento", "Fitness", "Deportes"],
        peliculas: ["Acción", "Comedia", "Drama"],
        videojuegos: [],
        ropa: ["Moda elegante", "Estilo casual"],
        hobbies: ["Viajes", "Familia", "Actividad física"],
      },
    },

    {
      id: 7,
      nombre: "Zoe Saldaña",

      edad: 48,
      fotoPerfil:
        "https://media.themoviedb.org/t/p/w300_and_h450_face/vQBwmsSOAd0JDaEcZ5p43J9xzsY.jpg",

      intereses: {
        comida: 3,
        deportes: 4,
        peliculas: 5,
        videojuegos: 4,
        ropa: 3,
      },

      gustos: {
        comida: ["Cocina internacional"],
        deportes: ["Baile", "Entrenamiento"],
        peliculas: ["Ciencia ficción", "Acción", "Fantasía"],
        videojuegos: ["Juegos de aventura"],
        ropa: ["Moda urbana", "Estilo casual"],
        hobbies: ["Danza", "Familia", "Viajes"],
      },
    },

    {
      id: 8,
      nombre: "Chris Pratt",

      edad: 47,
      fotoPerfil:
        "https://media.themoviedb.org/t/p/w300_and_h450_face/cRH6HPAQ98PlOwwEvhYO4CM9lwu.jpg",

      intereses: {
        comida: 5,
        deportes: 4,
        peliculas: 5,
        videojuegos: 4,
        ropa: 3,
      },

      gustos: {
        comida: ["Parrilla", "Comida estadounidense"],
        deportes: ["Entrenamiento", "Actividades al aire libre"],
        peliculas: ["Comedia", "Ciencia ficción", "Acción"],
        videojuegos: ["Juegos de aventura"],
        ropa: ["Estilo casual"],
        hobbies: ["Pesca", "Naturaleza", "Actividades al aire libre"],
      },
    },

    {
      id: 9,
      nombre: "Johnny Depp",

      edad: 63,
      fotoPerfil:
        "https://media.themoviedb.org/t/p/w300_and_h450_face/k2xt6EUxQDwYRKIyI4IBdZxfs8n.jpg",

      intereses: {
        comida: 4,
        deportes: 2,
        peliculas: 5,
        videojuegos: 2,
        ropa: 5,
      },

      gustos: {
        comida: ["Cocina internacional"],
        deportes: ["Actividad física ocasional"],
        peliculas: ["Drama", "Fantasía", "Cine clásico"],
        videojuegos: [],
        ropa: ["Moda alternativa", "Estilo vintage"],
        hobbies: ["Música", "Guitarra", "Pintura", "Arte"],
      },
    },

    {
      id: 10,
      nombre: "Sabrina Carpenter",

      edad: 27,
      fotoPerfil:
        "https://media.themoviedb.org/t/p/w300_and_h450_face/h2JcSqZ220VXDqb6xKBVcRquGGN.jpg",

      intereses: {
        comida: 4,
        deportes: 2,
        peliculas: 4,
        videojuegos: 2,
        ropa: 5,
      },

      gustos: {
        comida: ["Comida internacional"],
        deportes: ["Baile", "Entrenamiento"],
        peliculas: ["Comedia romántica", "Musicales"],
        videojuegos: [],
        ropa: ["Moda pop", "Moda vintage", "Diseño"],
        hobbies: ["Canto", "Composición musical", "Actuación"],
      },
    },
  ];
  console.log(perfiles);
  return (
    <>
      <div>Hola</div>
      <img
        src="https://media.themoviedb.org/t/p/w300_and_h450_face/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg"
        alt="iron man"
      />
    </>
  );
}

export default App;
