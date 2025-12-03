import { useState } from "react";
import Button from "../../componentes/Button.jsx";
import Display from "../../componentes/Display.jsx";

export default function UseStateConLogs() {
  const [counter, setCounter] = useState(0);
  console.log("rendering with counter value", counter);

  const increaseByOne = () => {
    console.log("increasing, value before", counter);
    setCounter(counter + 1);
  };
  
  const decreaseByOne = () => {
    console.log("decreasing, value before", counter);
    setCounter(counter - 1);
  };
  
  const setToZero = () => {
    console.log("resetting to zero, value before", counter);
    setCounter(0);
  };

  return (
    <div>
      <h3>useState con Logs</h3>
      <p>Observa la consola para entender cuándo y por qué se re-renderiza:</p>
      
      <Display counter={counter} label="Contador con Logs" />
      
      <div>
        <Button onClick={increaseByOne} text="plus" />
        <Button onClick={setToZero} text="zero" />
        <Button onClick={decreaseByOne} text="minus" />
      </div>
      
      <div style={{ marginTop: 20 }}>
        <h4>¿Qué observar en la consola?</h4>
        <ul>
          <li><strong>Render inicial:</strong> "rendering with counter value 0"</li>
          <li><strong>Antes del cambio:</strong> "increasing, value before 0"</li>
          <li><strong>Después del cambio:</strong> "rendering with counter value 1"</li>
          <li><strong>Patrón:</strong> Cada cambio de estado causa un re-render</li>
        </ul>
      </div>
    </div>
  );
}
