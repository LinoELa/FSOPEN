import { useState } from "react";

// Componente Display reutilizable
const ContadorDisplay = ({ valor, etiqueta }) => (
  <div
    style={{
      fontSize: 18,
      fontWeight: "bold",
      padding: "10px",
      backgroundColor: "#e8f5e8",
      borderRadius: 4,
      marginBottom: 10,
      textAlign: "center",
    }}
  >
    {etiqueta}: {valor}
  </div>
);

// Componente Button reutilizable
const BotonContador = ({ onClick, texto, color = "#007bff" }) => (
  <button
    onClick={onClick}
    style={{
      marginRight: 8,
      padding: "8px 16px",
      borderRadius: 4,
      border: "none",
      backgroundColor: color,
      color: "white",
      cursor: "pointer",
    }}
  >
    {texto}
  </button>
);

export default function EjemploEstadoCompartido() {
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  const incrementar1 = () => setContador1(contador1 + 1);
  const decrementar1 = () => setContador1(contador1 - 1);
  const resetear1 = () => setContador1(0);

  const incrementar2 = () => setContador2(contador2 + 1);
  const decrementar2 = () => setContador2(contador2 - 1);
  const resetear2 = () => setContador2(0);

  return (
    <div>
      <h3>Ejemplo: Estado Compartido</h3>
      <p>Múltiples componentes comparten el mismo patrón de estado:</p>

      <div style={{ display: "flex", gap: 20 }}>
        <div style={{ flex: 1 }}>
          <h4>Contador 1</h4>
          <ContadorDisplay valor={contador1} etiqueta="Contador 1" />
          <div>
            <BotonContador onClick={incrementar1} texto="+" color="#28a745" />
            <BotonContador onClick={decrementar1} texto="-" color="#dc3545" />
            <BotonContador onClick={resetear1} texto="Reset" color="#6c757d" />
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <h4>Contador 2</h4>
          <ContadorDisplay valor={contador2} etiqueta="Contador 2" />
          <div>
            <BotonContador onClick={incrementar2} texto="+" color="#28a745" />
            <BotonContador onClick={decrementar2} texto="-" color="#dc3545" />
            <BotonContador onClick={resetear2} texto="Reset" color="#6c757d" />
          </div>
        </div>
      </div>

      <div style={{ marginTop: 20 }}>
        <h4>Ventajas del estado compartido:</h4>
        <ul>
          <li>
            <strong>Reutilización:</strong> Componentes reutilizables
          </li>
          <li>
            <strong>Consistencia:</strong> Mismo comportamiento en toda la app
          </li>
          <li>
            <strong>Mantenibilidad:</strong> Cambios centralizados
          </li>
        </ul>
      </div>
    </div>
  );
}
