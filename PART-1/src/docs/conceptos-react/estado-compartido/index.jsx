import { useState } from "react";
import Button from "../../componentes/Button.jsx";
import Display from "../../componentes/Display.jsx";

// Componente hijo que recibe estado y función para cambiarlo
const HijoConEstado = ({ counter, onIncrement, onDecrement, onReset }) => {
  return (
    <div style={{ 
      padding: 15, 
      backgroundColor: "#fff3cd", 
      borderRadius: 8,
      border: "1px solid #ffeaa7"
    }}>
      <h4>Componente Hijo</h4>
      <Display counter={counter} label="Estado compartido" />
      <div>
        <Button onClick={onIncrement} text="➕ Incrementar" />
        <Button onClick={onDecrement} text="➖ Decrementar" />
        <Button onClick={onReset} text="🔄 Reset" />
      </div>
      <p style={{ fontSize: 12, color: "#666", marginTop: 10 }}>
        Este componente puede modificar el estado que vive en el padre
      </p>
    </div>
  );
};

export default function EstadoCompartido() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => setCounter(counter + 1);
  const handleDecrement = () => setCounter(counter - 1);
  const handleReset = () => setCounter(0);

  return (
    <div>
      <h3>Estado Compartido</h3>
      <p>El estado vive en el componente padre y se pasa a los hijos:</p>
      
      <div style={{ marginBottom: 20 }}>
        <h4>Componente Padre</h4>
        <Display counter={counter} label="Estado en el padre" />
        <div>
          <Button onClick={handleIncrement} text="➕ Incrementar" />
          <Button onClick={handleDecrement} text="➖ Decrementar" />
          <Button onClick={handleReset} text="🔄 Reset" />
        </div>
      </div>

      <HijoConEstado 
        counter={counter}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onReset={handleReset}
      />
      
      <div style={{ marginTop: 20 }}>
        <h4>Conceptos clave:</h4>
        <ul>
          <li><strong>Lifting State Up:</strong> El estado vive en el componente padre</li>
          <li><strong>Props Down:</strong> Se pasa el estado a los hijos</li>
          <li><strong>Callbacks Up:</strong> Los hijos pueden cambiar el estado del padre</li>
        </ul>
      </div>
    </div>
  );
}
