import { useState } from "react";

// Componente Display completamente separado
const Display = ({ counter }) => (
  <div style={{ 
    fontSize: 24, 
    fontWeight: "bold",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: 8,
    marginBottom: 15,
    textAlign: "center",
    border: "2px solid #dee2e6"
  }}>
    Contador: {counter}
  </div>
);

// Componente Button completamente separado
const Button = ({ onClick, text, variant = "primary" }) => {
  const styles = {
    primary: { bg: "#007bff", color: "#fff" },
    secondary: { bg: "#6c757d", color: "#fff" },
    success: { bg: "#28a745", color: "#fff" },
    danger: { bg: "#dc3545", color: "#fff" }
  };

  return (
    <button 
      onClick={onClick}
      style={{ 
        marginRight: 10, 
        padding: "10px 20px",
        borderRadius: 6,
        border: "none",
        backgroundColor: styles[variant].bg,
        color: styles[variant].color,
        cursor: "pointer",
        fontSize: 16,
        fontWeight: "500"
      }}
    >
      {text}
    </button>
  );
};

export default function EjemploDisplayButton() {
  const [counter, setCounter] = useState(0);

  const incrementar = () => setCounter(counter + 1);
  const decrementar = () => setCounter(counter - 1);
  const resetear = () => setCounter(0);

  return (
    <div>
      <h3>Ejemplo: Display + Button</h3>
      <p>Componentes completamente separados y reutilizables:</p>
      
      <Display counter={counter} />
      
      <div>
        <Button onClick={incrementar} text="➕ Incrementar" variant="success" />
        <Button onClick={decrementar} text="➖ Decrementar" variant="danger" />
        <Button onClick={resetear} text="🔄 Reset" variant="secondary" />
      </div>

      <div style={{ marginTop: 20 }}>
        <h4>Características de estos componentes:</h4>
        <ul>
          <li><strong>Display:</strong> Solo se encarga de mostrar información</li>
          <li><strong>Button:</strong> Solo se encarga de la interacción</li>
          <li><strong>Props:</strong> Reciben datos y funciones desde el padre</li>
          <li><strong>Estilos:</strong> Cada componente maneja su propio estilo</li>
        </ul>
      </div>
    </div>
  );
}
