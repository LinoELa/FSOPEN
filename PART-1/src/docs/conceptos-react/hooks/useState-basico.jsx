import { useState } from "react";
import Button from "../../componentes/Button.jsx";
import Display from "../../componentes/Display.jsx";

export default function UseStateBasico() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    console.log("clicked");
    setCounter(counter + 1);
  };

  return (
    <div>
      <h3>useState Básico</h3>
      <p>El hook useState permite agregar estado a componentes funcionales:</p>
      
      <Display counter={counter} label="Contador" />
      <Button onClick={handleClick} text="plus" />
      
      <div style={{ marginTop: 20 }}>
        <h4>Conceptos clave:</h4>
        <ul>
          <li><strong>useState(0):</strong> Inicializa el estado con valor 0</li>
          <li><strong>setCounter:</strong> Función para actualizar el estado</li>
          <li><strong>Re-render:</strong> El componente se re-renderiza cuando cambia el estado</li>
          <li><strong>Estado local:</strong> Cada componente tiene su propio estado</li>
        </ul>
      </div>
    </div>
  );
}
