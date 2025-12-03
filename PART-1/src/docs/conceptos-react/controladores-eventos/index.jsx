import { useState } from "react";
import Button from "../../componentes/Button.jsx";
import Display from "../../componentes/Display.jsx";

export default function ControladoresEventos() {
  const [counter, setCounter] = useState(0);

  const handlePlus = () => {
    console.log("plus clicked");
    setCounter((c) => c + 1);
  };

  const handleReset = () => {
    console.log("reset clicked");
    setCounter(0);
  };

  return (
    <div>
      <Display counter={counter} label="Contador" />
      <div>
        <Button onClick={handlePlus} text="plus (named)" />
        <Button onClick={handleReset} text="zero (inline)" />
      </div>
      <p style={{ color: "#666", marginTop: 10 }}>
        Los controladores de eventos son funciones que se ejecutan cuando ocurre un evento.
        Observa la consola para ver los logs.
      </p>
    </div>
  );
}
