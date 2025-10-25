import { useState, useEffect } from "react";
import Button from "../../componentes/Button.jsx";
import Display from "../../componentes/Display.jsx";

export default function UseEffectMultiple() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Usuario");

  // useEffect que se ejecuta en cada render
  useEffect(() => {
    console.log("useEffect sin dependencias - se ejecuta en cada render");
  });

  // useEffect que se ejecuta solo una vez
  useEffect(() => {
    console.log("useEffect con dependencias vacías - solo al montar");
  }, []);

  // useEffect que depende de counter
  useEffect(() => {
    console.log("useEffect que depende de counter:", counter);
  }, [counter]);

  // useEffect que depende de name
  useEffect(() => {
    console.log("useEffect que depende de name:", name);
  }, [name]);

  return (
    <div>
      <h3>useEffect Múltiple</h3>
      <p>Diferentes useEffect con diferentes dependencias:</p>
      
      <Display counter={counter} label="Contador" />
      <div style={{ marginBottom: 10 }}>
        <label>Nombre: </label>
        <input 
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "5px", marginLeft: "5px" }}
        />
      </div>
      
      <div>
        <Button onClick={() => setCounter(counter + 1)} text="Incrementar" />
        <Button onClick={() => setCounter(counter - 1)} text="Decrementar" />
        <Button onClick={() => setCounter(0)} text="Reset" />
      </div>
      
      <div style={{ marginTop: 20 }}>
        <h4>Tipos de useEffect:</h4>
        <ul>
          <li><strong>Sin dependencias:</strong> Se ejecuta en cada render</li>
          <li><strong>Dependencias vacías []:</strong> Solo al montar/desmontar</li>
          <li><strong>Con dependencias [counter]:</strong> Solo cuando cambia counter</li>
          <li><strong>Con dependencias [name]:</strong> Solo cuando cambia name</li>
        </ul>
      </div>
    </div>
  );
}
