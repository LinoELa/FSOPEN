import { useEffect, useState } from "react";
import Button from "../../componentes/Button.jsx";
import Display from "../../componentes/Display.jsx";

export default function UseEffectAutoIncremento() {
  const [counter, setCounter] = useState(0);
  const [running, setRunning] = useState(true);

  // useEffect para el auto-incremento
  useEffect(() => {
    if (!running) return;
    
    const id = setInterval(() => {
      setCounter((c) => c + 1);
    }, 1000);
    
    // Cleanup function
    return () => clearInterval(id);
  }, [running]);

  // useEffect para auto-stop
  useEffect(() => {
    if (counter === 10) {
      setRunning(false);
    }
  }, [counter]);

  return (
    <div>
      <h3>useEffect Auto-incremento</h3>
      <p>useEffect permite ejecutar efectos secundarios:</p>
      
      <Display counter={counter} label="Auto Counter" />
      
      <div>
        <Button 
          onClick={() => setRunning(true)} 
          text="▶ Start" 
          disabled={running}
        />
        <Button 
          onClick={() => setRunning(false)} 
          text="⏸ Stop" 
          disabled={!running}
        />
        <Button 
          onClick={() => setCounter(0)} 
          text="🔄 Reset" 
        />
      </div>

      <div style={{ marginTop: 20 }}>
        <h4>Conceptos clave:</h4>
        <ul>
          <li><strong>useEffect:</strong> Ejecuta efectos secundarios</li>
          <li><strong>Dependencies [running]:</strong> Se ejecuta cuando cambia 'running'</li>
          <li><strong>Cleanup:</strong> Limpia el interval cuando el componente se desmonta</li>
          <li><strong>Auto-stop:</strong> Se detiene automáticamente al llegar a 10</li>
        </ul>
      </div>
    </div>
  );
}
