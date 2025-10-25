import { useState } from "react";
import Button from "../../componentes/Button.jsx";
import Display from "../../componentes/Display.jsx";

// Componente Display refactorizado
const ContadorDisplay = ({ valor }) => (
  <Display counter={valor} label="Contador" />
);

// Componente Button refactorizado
const BotonContador = ({ onClick, texto, color = "default" }) => {
  const colors = {
    default: { bg: "#007bff", hover: "#0056b3" },
    success: { bg: "#28a745", hover: "#1e7e34" },
    danger: { bg: "#dc3545", hover: "#c82333" },
    warning: { bg: "#ffc107", hover: "#e0a800" }
  };

  return (
    <button 
      onClick={onClick}
      style={{ 
        marginRight: 8, 
        padding: "8px 16px",
        borderRadius: 4,
        border: "none",
        backgroundColor: colors[color].bg,
        color: color === "warning" ? "#000" : "#fff",
        cursor: "pointer",
        transition: "background-color 0.2s"
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = colors[color].hover}
      onMouseOut={(e) => e.target.style.backgroundColor = colors[color].bg}
    >
      {texto}
    </button>
  );
};

export default function RefactorizacionComponentes() {
  const [counter, setCounter] = useState(0);

  const incrementar = () => setCounter(counter + 1);
  const decrementar = () => setCounter(counter - 1);
  const resetear = () => setCounter(0);

  return (
    <div>
      <h3>Refactorización de Componentes</h3>
      <p>Separar la lógica en componentes más pequeños y reutilizables:</p>
      
      <ContadorDisplay valor={counter} />
      
      <div>
        <BotonContador onClick={incrementar} texto="➕ Incrementar" color="success" />
        <BotonContador onClick={decrementar} texto="➖ Decrementar" color="danger" />
        <BotonContador onClick={resetear} texto="🔄 Reset" color="warning" />
      </div>

      <div style={{ marginTop: 20 }}>
        <h4>Beneficios de la refactorización:</h4>
        <ul>
          <li><strong>Reutilización:</strong> Componentes que se pueden usar en otros lugares</li>
          <li><strong>Mantenibilidad:</strong> Código más fácil de mantener y debuggear</li>
          <li><strong>Legibilidad:</strong> Código más claro y organizado</li>
          <li><strong>Testing:</strong> Más fácil de testear componentes individuales</li>
        </ul>
      </div>
    </div>
  );
}
