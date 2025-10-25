// main.jsx
// ===================================================================================
// MODO A) RENDER NORMAL (sin contador por props)
// Descomenta este bloque si quieres montar tu App “normal”.
// ===================================================================================

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Si quieres StrictMode, descomenta las 2 líneas marcadas
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  // <StrictMode>
  <App />
  // </StrictMode>
);

// ===================================================================================
// MODO B) RE-RENDER MANUAL (contador por props, sin hooks)
// Descomenta este bloque y comenta el MODO A si quieres ver el contador incrementando.
// ===================================================================================

/*
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const container = document.getElementById("root");
const root = createRoot(container);

let counter = 1;

const refresh = () => {
  // Aquí App debe aceptar la prop 'counter': const App = ({ counter }) => {...}
  root.render(<App counter={counter} />);
};

refresh(); // primer render

setInterval(() => {
  counter += 1;
  refresh(); // re-render con el nuevo valor
}, 1000);
*/
