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
