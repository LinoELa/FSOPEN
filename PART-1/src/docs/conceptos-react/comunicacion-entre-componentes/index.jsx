import Button from "../../componentes/Button.jsx";
import Display from "../../componentes/Display.jsx";

// Componente hijo que recibe props
const Hijo = ({ mensaje, numero }) => {
  return (
    <div
      style={{
        padding: 10,
        backgroundColor: "#f0f8ff",
        color: "#666",
        borderRadius: 4,
        margin: "10px 0",
      }}
    >
      <p>
        <strong>Mensaje del padre:</strong> {mensaje}
      </p>
      <p>
        <strong>Número del padre:</strong> {numero}
      </p>
    </div>
  );
};

// Componente padre que pasa props
export default function ComunicacionEntreComponentes() {
  const mensaje = "¡Hola desde el componente padre!";
  const numero = 42;

  return (
    <div>
      <h3>Comunicación Padre → Hijo</h3>
      <p>El componente padre pasa datos a sus hijos mediante props:</p>

      <Hijo mensaje={mensaje} numero={numero} />

      <div style={{ marginTop: 20 }}>
        <h4>Props pasadas:</h4>
        <ul>
          <li>
            <code>mensaje</code>: "{mensaje}"
          </li>
          <li>
            <code>numero</code>: {numero}
          </li>
        </ul>
      </div>
    </div>
  );
}
