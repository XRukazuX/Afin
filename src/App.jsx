import "./App.css";
import { useState } from "react";
import Formulario from "./assets/Formulario";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";

import { GiForkKnifeSpoon } from "react-icons/gi";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { MdSportsEsports } from "react-icons/md";
import { MdLocalMovies } from "react-icons/md";
import { GiClothes } from "react-icons/gi";

import Card from "react-bootstrap/Card";
function App() {
  const [recomendaciones, setRecomendaciones] = useState([]);
  const [categoriaElegida, setCategoriaElegida] = useState("");
  const [on, setOn] = useState(true);
  const perfiles = [
    {
      id: 1,
      nombre: "Robert Downey Jr.",
      edad: 61,
      fotoPerfil:
        "https://media.themoviedb.org/t/p/w300_and_h450_face/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg",

      intereses: {
        comida: 3,
        deportes: 2,
        peliculas: 5,
        videojuegos: 2,
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
        comida: 2,
        deportes: 4,
        peliculas: 3,
        videojuegos: 5,
        ropa: 2,
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
        videojuegos: 2,
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
        deportes: 1,
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
        comida: 2,
        deportes: 4,
        peliculas: 5,
        videojuegos: 2,
        ropa: 3,
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
        peliculas: 3,
        videojuegos: 1,
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
        comida: 2,
        deportes: 3,
        peliculas: 5,
        videojuegos: 4,
        ropa: 2,
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
        deportes: 3,
        peliculas: 4,
        videojuegos: 2,
        ropa: 2,
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
        comida: 3,
        deportes: 2,
        peliculas: 4,
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
        comida: 3,
        deportes: 3,
        peliculas: 4,
        videojuegos: 1,
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
  const [usuario, setUsuario] = useState({
    nombre: "",
    intereses: {
      comida: 0,
      deportes: 0,
      peliculas: 0,
      videojuegos: 0,
      ropa: 0,
    },
  });
  function obtenerIcono(clave) {
    switch (clave) {
      case "comida":
        return (
          <GiForkKnifeSpoon
            className="Icons"
            style={{ color: "#ed7720", background: "#fedbb3" }}
          />
        );

      case "deportes":
        return (
          <MdOutlineSportsSoccer
            className="Icons"
            style={{ color: "#4d916b", background: "#b9e5cd" }}
          />
        );

      case "peliculas":
        return (
          <MdLocalMovies
            className="Icons"
            style={{ color: "#522fa4", background: "#dfccfd" }}
          />
        );

      case "videojuegos":
        return (
          <MdSportsEsports
            className="Icons"
            style={{ color: "#265bca", background: "#a5cbfd" }}
          />
        );

      case "ropa":
        return (
          <GiClothes
            className="Icons"
            style={{ color: "#da3f9a", background: "#fdcfe6" }}
          />
        );

      default:
        return null;
    }
  }
  const categorias = ["comida", "deportes", "peliculas", "videojuegos", "ropa"];
  function crearVector(intereses) {
    let vector = [];

    for (let i = 0; i < categorias.length; i++) {
      let categoria = categorias[i];

      let valor = intereses[categoria];

      vector.push(valor);
    }

    return vector;
  }

  function productoEscalar(a, b) {
    let suma = 0;

    for (let i = 0; i < a.length; i++) {
      suma += a[i] * b[i];
    }

    return suma;
  }
  function ejecutarRecomendaciones() {
    // 1. Convertimos los intereses del usuario en un vector.
    let vectorUsuario = crearVector(usuario.intereses);

    // 2. Si se eligió una categoría, le damos el doble de peso.
    if (categoriaElegida !== "") {
      let matriz = [];

      // Construimos una matriz diagonal.
      for (let i = 0; i < categorias.length; i++) {
        let fila = [];

        for (let j = 0; j < categorias.length; j++) {
          if (i === j) {
            fila.push(categorias[i] === categoriaElegida ? 2 : 1);
          } else {
            fila.push(0);
          }
        }

        matriz.push(fila);
      }

      // Multiplicamos la matriz por el vector del usuario.
      let vectorTransformado = [];

      for (let i = 0; i < matriz.length; i++) {
        let suma = 0;

        for (let j = 0; j < vectorUsuario.length; j++) {
          suma += matriz[i][j] * vectorUsuario[j];
        }

        vectorTransformado.push(suma);
      }

      vectorUsuario = vectorTransformado;
    }

    // 3. Calculamos la puntuación de cada perfil.
    let resultados = [];

    for (let i = 0; i < perfiles.length; i++) {
      let vectorPerfil = crearVector(perfiles[i].intereses);
      let puntuacion = productoEscalar(vectorUsuario, vectorPerfil);

      resultados.push({
        ...perfiles[i],
        puntuacion,
      });
    }

    // 4. Ordenamos de mayor a menor y guardamos los tres primeros.
    resultados.sort((a, b) => b.puntuacion - a.puntuacion);
    setRecomendaciones(resultados.slice(0, 3));
  }
  console.log(usuario);
  return (
    <>
      <div className={on ? "Show" : "Invisible"}>
        <Formulario setUsuario={setUsuario} setOn={setOn} />
      </div>
      <div className="DatosVisibles">
        <section className="Titulo">
          <FaStarHalfAlt className="star" />

          <h1>Match de Intereses</h1>
        </section>
        <section className="Editar" onClick={() => setOn(true)}>
          <FaPencil />
          <p>Editar</p>
        </section>
      </div>
      <p className="Uso">Descubri que actor comparte mas gustos con vos</p>
      <div className="Preferencias">
        <section className="Preferencias-Titulo">
          <FaUserGroup className="users" />
          <h2>Tus Preferencias</h2>
        </section>
        <section className="categorias-ordenadas">
          {Object.entries(usuario.intereses).map(([clave, valor]) => {
            return (
              <section key={clave} className="dates">
                {obtenerIcono(clave)}
                <section>
                  <h6>{clave.charAt(0).toUpperCase() + clave.slice(1)}</h6>
                  <p>{valor}/5</p>
                </section>
              </section>
            );
          })}
        </section>
      </div>
      <div className="MatrizAsociada">
        <label htmlFor="categoria">Dar más importancia a:</label>
        <select
          id="categoria"
          value={categoriaElegida}
          onChange={(e) => setCategoriaElegida(e.target.value)}
        >
          <option value="">Todas por igual</option>
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <h2>
        {recomendaciones.length > 0
          ? "Tus perfiles afines"
          : "Perfiles disponibles"}
      </h2>
      <button type="button" onClick={ejecutarRecomendaciones}>
        Buscar recomendaciones
      </button>
      <div className="Conteiner-Perfil">
        {(recomendaciones.length > 0 ? recomendaciones : perfiles).map(
          (Perfil) => (
            <Card
              key={Perfil.id}
              style={{ width: "18rem" }}
              className="Perfiles"
            >
              <Card.Img variant="top" src={Perfil.fotoPerfil} />
              <Card.Body>
                <Card.Title>{Perfil.nombre}</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>

              <div className="datos">
                <h5>{Perfil.nombre}</h5>

                <p>Edad: {Perfil.edad}</p>
                {typeof Perfil.puntuacion === "number" && (
                  <p>Puntuación: {Perfil.puntuacion}</p>
                )}

                <section>
                  {Object.entries(Perfil.gustos).map(([categoria, gustos]) => (
                    <div key={categoria}>
                      <h5>{categoria}</h5>
                      <p>{gustos.join(", ")}</p>
                    </div>
                  ))}
                </section>
              </div>
            </Card>
          ),
        )}
      </div>
    </>
  );
}

export default App;
