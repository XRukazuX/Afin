import { useState } from "react";

function Formulario({ setUsuario }) {
  const [formulario, setFormulario] = useState({
    nombre: "",
    intereses: {
      comida: 0,
      deportes: 0,
      peliculas: 0,
      videojuegos: 0,
      ropa: 0,
    },
  });

  // Actualizar los datos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  // Actualizar los intereses
  const handleIntereses = (e) => {
    const { name, value } = e.target;

    setFormulario({
      ...formulario,
      intereses: {
        ...formulario.intereses,
        [name]: Number(value),
      },
    });
  };

  // Enviar los datos
  const handleSubmit = (e) => {
    e.preventDefault();

    setUsuario(formulario);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre:</label>
      <input
        name="nombre"
        id="nombre"
        value={formulario.nombre}
        onChange={handleChange}
      />

      <h3>Intereses</h3>

      <label htmlFor="comida">Comida:</label>
      <input
        id="comida"
        name="comida"
        type="number"
        min="0"
        max="5"
        value={formulario.intereses.comida}
        onChange={handleIntereses}
      />

      <label htmlFor="deportes">Deportes:</label>
      <input
        id="deportes"
        name="deportes"
        type="number"
        min="0"
        max="5"
        value={formulario.intereses.deportes}
        onChange={handleIntereses}
      />

      <label htmlFor="peliculas">Películas:</label>
      <input
        id="peliculas"
        name="peliculas"
        type="number"
        min="0"
        max="5"
        value={formulario.intereses.peliculas}
        onChange={handleIntereses}
      />

      <label htmlFor="videojuegos">Videojuegos:</label>
      <input
        id="videojuegos"
        name="videojuegos"
        type="number"
        min="0"
        max="5"
        value={formulario.intereses.videojuegos}
        onChange={handleIntereses}
      />

      <label htmlFor="ropa">Ropa:</label>
      <input
        id="ropa"
        name="ropa"
        type="number"
        min="0"
        max="5"
        value={formulario.intereses.ropa}
        onChange={handleIntereses}
      />

      <button type="submit">Guardar usuario</button>
    </form>
  );
}

export default Formulario;
