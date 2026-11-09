import { useState } from "react";
import Button from "react-bootstrap/Button";
function Formulario({ setUsuario, setOn }) {
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
    setOn(false);
  };

  return (
    <form onSubmit={handleSubmit} className="Formulario">
      <h2>Datos del usuario</h2>
      <div className="Name">
        <label htmlFor="nombre">Nombre:</label>
        <input
          name="nombre"
          id="nombre"
          placeholder="Nombre Ficticio"
          value={formulario.nombre}
          onChange={handleChange}
        />
      </div>
      <h3>Intereses</h3>
      <p>#Maximo valor permitido por interes 5</p>
      <section>
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
      </section>
      <section>
        {" "}
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
      </section>
      <section>
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
      </section>

      <section>
        {" "}
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
      </section>

      <section>
        {" "}
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
      </section>
      <Button variant="outline-primary" type="submit" className="Save">
        Guardar usuario
      </Button>
    </form>
  );
}

export default Formulario;
